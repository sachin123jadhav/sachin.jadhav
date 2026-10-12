import { NextResponse } from "next/server";

/**
 * Contact form delivery.
 *
 * Transports are tried in this order, first configured one wins:
 *   1. RESEND_API_KEY        -> Resend HTTP API (best: your own domain, reply-to set)
 *   2. WEB3FORMS_ACCESS_KEY  -> Web3Forms relay
 *   3. (nothing configured)  -> FormSubmit relay, which needs no account at all
 *
 * The FormSubmit fallback means the form works out of the box. The very first
 * submission makes FormSubmit email the destination address an activation link;
 * until that link is clicked, nothing is delivered. Set RESEND_API_KEY any time
 * to move off the relay without touching this file.
 *
 * See .env.example for every supported variable.
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "sachin123jadhav@gmail.com";
const FALLBACK_FROM = "Portfolio Contact <onboarding@resend.dev>";

const LIMITS = {
  name: 120,
  email: 200,
  subject: 200,
  message: 5000,
};

/** Best-effort in-memory throttle. Per server instance only. */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Crude memory guard for long-running instances.
  if (hits.size > 5000) hits.clear();

  return recent.length > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validate({ name, email, subject, message }) {
  const errors = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (subject.length < 2) errors.subject = "Please add a subject.";
  if (message.length < 10) {
    errors.message = "Please write a slightly longer message.";
  }

  return errors;
}

async function sendWithResend({ name, email, subject, message }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || FALLBACK_FROM,
      to: [TO_EMAIL],
      // Replying in Gmail goes straight back to the visitor.
      reply_to: email,
      subject: subject || `Portfolio enquiry from ${name}`,
      // Plain text only. The fields are visitor-supplied, so avoiding an HTML
      // body also avoids having to escape them for mail clients.
      text: [
        "New contact form submission",
        "",
        `Name:     ${name}`,
        `Email:    ${email}`,
        `Subject:  ${subject}`,
        `Received: ${new Date().toUTCString()}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  // Read once, then parse — the body can only be consumed a single time.
  const raw = await res.text();
  let body = {};
  try {
    body = JSON.parse(raw);
  } catch {
    // Not JSON (an error page, say). The raw text is reported below.
  }

  if (!res.ok) {
    throw new Error(
      `Resend ${res.status}: ${body.message || raw || "unknown error"}`,
    );
  }

  return body.id;
}

async function sendWithWeb3Forms({ name, email, subject, message }) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      name,
      email,
      subject,
      message,
      replyto: email,
    }),
  });

  const body = await res.json().catch(() => ({}));

  if (!res.ok || body.success === false) {
    throw new Error(`Web3Forms ${res.status}: ${body.message || "unknown error"}`);
  }
}

async function sendWithFormSubmit({ name, email, subject, message }, siteOrigin) {
  const res = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // FormSubmit refuses requests that do not look like they came from a page
      // on a web server. This fetch runs on the server, so the browser's own
      // Referer is not present and has to be passed through explicitly.
      Referer: `${siteOrigin}/contact`,
      Origin: siteOrigin,
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
      _subject: subject,
      _replyto: email,
      _template: "table",
      _captcha: "false",
    }),
  });

  // FormSubmit answers 200 even when it is only asking for activation, so the
  // body has to be checked as well — otherwise a first-time setup request would
  // be reported to the visitor as a delivered message.
  const body = await res.json().catch(() => ({}));
  const succeeded = body.success === true || body.success === "true";

  if (!res.ok || !succeeded) {
    throw new Error(
      `FormSubmit ${res.status}: ${body.message || "delivery not confirmed"}`,
    );
  }
}

export async function GET() {
  const via = process.env.RESEND_API_KEY
    ? "resend"
    : process.env.WEB3FORMS_ACCESS_KEY
      ? "web3forms"
      : "formsubmit";

  return NextResponse.json({ ok: true, transport: via, to: TO_EMAIL });
}

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages. Please try again in a minute." },
      { status: 429 },
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: real users never see or fill this field.
  if (text(payload.company, 200)) {
    // Pretend it worked so bots do not learn anything.
    return NextResponse.json({ ok: true, delivered: true });
  }

  const data = {
    name: text(payload.name, LIMITS.name),
    email: text(payload.email, LIMITS.email),
    subject: text(payload.subject, LIMITS.subject),
    message: text(payload.message, LIMITS.message),
  };

  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Work out which site this submission came from, for the relay's benefit.
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const host = forwardedHost || request.headers.get("host") || "localhost:3000";
  const isLocal = /^(localhost|127\.|\[::1\])/.test(host);
  const proto = forwardedProto || (isLocal ? "http" : "https");
  const siteOrigin = request.headers.get("origin") || `${proto}://${host}`;

  try {
    if (process.env.RESEND_API_KEY) {
      const id = await sendWithResend(data);

      // Resend accepting the message is not the same as it being delivered, but
      // the id is what the Resend dashboard tracks.
      console.log("[contact] Resend accepted message:", id ?? "(no id returned)");

      return NextResponse.json({
        ok: true,
        via: "resend",
        // Exposed while developing so the message id can be verified.
        ...(process.env.NODE_ENV !== "production" ? { id } : {}),
      });
    }

    if (process.env.WEB3FORMS_ACCESS_KEY) {
      await sendWithWeb3Forms(data);
      return NextResponse.json({ ok: true, via: "web3forms" });
    }

    await sendWithFormSubmit(data, siteOrigin);
    return NextResponse.json({ ok: true, via: "formsubmit" });
  } catch (error) {
    console.error("[contact] delivery failed:", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "Could not send your message right now. Please email me directly instead.",
        // Setup problems are otherwise invisible — surface them while developing.
        ...(process.env.NODE_ENV !== "production"
          ? { detail: String(error?.message || error) }
          : {}),
      },
      { status: 502 },
    );
  }
}
