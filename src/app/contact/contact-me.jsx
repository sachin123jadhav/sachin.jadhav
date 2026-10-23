"use client";

import React, { useRef, useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import AnimatedButton from "../component/button";

const CONTACT_EMAIL = "sachin123jadhav@gmail.com";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 9890122027",
    href: "tel:+919890122027",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/sachin123jadhav",
    href: "https://www.linkedin.com/in/sachin123jadhav/",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Pune, India",
    href: null,
  },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

/**
 * Sends the (already validated) message to FormSubmit from the browser. Used
 * when the server has no mail transport configured; FormSubmit blocks requests
 * from cloud servers, so this cannot happen in the API route.
 */
async function sendViaFormSubmit({ name, email, subject, message }, honeypot) {
  // Same trimming and length caps the API route applies before it validates.
  const clean = (value, max) => value.trim().slice(0, max);
  const fields = {
    name: clean(name, 120),
    email: clean(email, 200),
    subject: clean(subject, 200),
    message: clean(message, 5000),
  };

  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...fields,
      _subject: fields.subject || `Portfolio enquiry from ${fields.name}`,
      _replyto: fields.email,
      _template: "table",
      _captcha: "false",
      // FormSubmit's own spam trap, for bots that skip the API route.
      _honey: honeypot,
    }),
  });

  const body = await res.json().catch(() => ({}));
  const ok = res.ok && (body.success === true || body.success === "true");
  return { ok, reason: ok ? "" : body.message || "" };
}

const fieldClass = (hasError) =>
  `w-full h-12 px-4 rounded-xl border bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ${
    hasError
      ? "border-red-500 dark:border-red-500"
      : "border-slate-300 dark:border-slate-600"
  }`;

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [company, setCompany] = useState(""); // honeypot, never shown to humans
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  // Guards against a second submit fired before the "sending" re-render lands.
  const sendingRef = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sendingRef.current) return;
    sendingRef.current = true;

    setStatus("sending");
    setErrors({});
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, company }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus("sent");
        return;
      }

      // The server checked the message but has no mail service of its own.
      if (res.ok && data.relay === "formsubmit") {
        const relay = await sendViaFormSubmit(formData, company);

        if (relay.ok) {
          setStatus("sent");
          return;
        }

        console.error("[contact] FormSubmit relay refused:", relay.reason);
        setServerError("Your message couldn't be sent right now. Please try again in a moment.");
        setStatus("error");
        return;
      }

      // Server-side validation problems belong on the fields.
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }

      // Delivery failed (rate limit, mail service down or misconfigured).
      // Keep what the visitor typed so they can simply try again.
      setServerError(
        data.error || "Your message couldn't be sent right now. Please try again.",
      );
      setStatus("error");
    } catch {
      setServerError(
        "Your message couldn't be sent. Please check your connection and try again.",
      );
      setStatus("error");
    } finally {
      sendingRef.current = false;
    }
  };

  const handleReset = () => {
    setFormData(emptyForm);
    setCompany("");
    setErrors({});
    setServerError("");
    setStatus("idle");
  };

  const secondaryButtonClass =
    "mt-8 inline-block px-[25px] h-[50px] leading-[50px] rounded-md border-2 border-purple-700 dark:border-slate-400 text-purple-700 dark:text-white font-bold text-[16px] tracking-[0.02em] hover:bg-purple-700 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-pointer";

  return (
    <section className="section section--band bg-slate-100 dark:bg-slate-800">
      {/* Contact Content */}
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3" data-reveal="left">
            <div className="p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-sm">
              <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>

              {status === "sent" ? (
                <div className="text-center py-10">
                  <FiCheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Message sent
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    Thanks {formData.name || "for reaching out"} — your message
                    is on its way. I usually reply within 24–48 hours.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className={secondaryButtonClass}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative space-y-6"
                  noValidate
                >
                  {/* Honeypot — hidden from people, irresistible to bots */}
                  <div
                    className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="contact-company">Company</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Name
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        aria-invalid={Boolean(errors.name)}
                        className={fieldClass(Boolean(errors.name))}
                      />

                      {errors.name && (
                        <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        aria-invalid={Boolean(errors.email)}
                        className={fieldClass(Boolean(errors.email))}
                      />

                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      aria-invalid={Boolean(errors.subject)}
                      className={fieldClass(Boolean(errors.subject))}
                    />

                    {errors.subject && (
                      <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full p-4 rounded-xl border bg-white dark:bg-slate-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                        errors.message
                          ? "border-red-500 dark:border-red-500"
                          : "border-slate-300 dark:border-slate-600"
                      }`}
                    />

                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300"
                    >
                      <FiAlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                      <p>
                        {serverError} If it keeps failing, you can email me at{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  <AnimatedButton
                    type="submit"
                    disabled={status === "sending"}
                    label={status === "sending" ? "Sending…" : "Send Message"}
                    icon={
                      status === "sending" ? null : (
                        <FiSend className="inline ms-2 text-xl" />
                      )
                    }
                  />
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2" data-reveal="right">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shadow-sm">
                <h2 className="font-bold text-xl text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>

                <ul className="space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start gap-4 group"
                        >
                          <span className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                            <item.icon className="w-5 h-5 text-purple-700 dark:text-purple-300" aria-hidden="true" />
                          </span>

                          <div>
                            <p className="text-sm text-gray-500 dark:text-slate-400">
                              {item.label}
                            </p>

                            <p className="font-medium text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors break-words">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <span className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-purple-700 dark:text-purple-300" aria-hidden="true" />
                          </span>

                          <div>
                            <p className="text-sm text-gray-500 dark:text-slate-400">
                              {item.label}
                            </p>

                            <p className="font-medium text-gray-900 dark:text-white">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Response */}
              <div className="p-6 lg:p-8 rounded-3xl bg-purple-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quick Response
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  I typically respond within 24–48 hours. For urgent inquiries,
                  feel free to reach out via phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
