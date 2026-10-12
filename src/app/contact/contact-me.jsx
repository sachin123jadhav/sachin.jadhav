"use client";

import React, { useState } from "react";
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

const fieldClass = (hasError) =>
  `w-full h-12 px-4 rounded-xl border bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 ${
    hasError
      ? "border-red-500 dark:border-red-500"
      : "border-slate-300 dark:border-slate-700"
  }`;

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [company, setCompany] = useState(""); // honeypot, never shown to humans
  const [status, setStatus] = useState("idle"); // idle | sending | sent | fallback
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /** Last-resort path: hand the message to the visitor's own mail client. */
  const openMailClient = () => {
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio enquiry from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `${formData.message}\n\n—\n${formData.name}\n${formData.email}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

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

      // Server-side validation problems belong on the fields.
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }

      // Delivery is broken or unconfigured — do not strand the visitor.
      setServerError(data.error || "");
      openMailClient();
      setStatus("fallback");
    } catch {
      openMailClient();
      setStatus("fallback");
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
    <section className="min-h-screen bg-slate-100 dark:bg-slate-800 py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Let&apos;s Work Together
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            If you&apos;re looking for a Senior UI/UX Designer who can also
            build and support frontend implementation for SaaS and enterprise
            products, feel free to get in touch.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
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
              ) : status === "fallback" ? (
                <div className="text-center py-10">
                  <FiCheckCircle className="w-14 h-14 text-amber-500 mx-auto mb-4" />

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    One last step
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    {serverError ||
                      "I couldn't send that automatically just now, so your email app should have opened with the message ready to go."}{" "}
                    If it didn&apos;t open, email me directly at{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-purple-700 dark:text-purple-400 underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className={secondaryButtonClass}
                  >
                    Back to the form
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
                      className={`w-full p-4 rounded-xl border bg-white dark:bg-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                        errors.message
                          ? "border-red-500 dark:border-red-500"
                          : "border-slate-300 dark:border-slate-700"
                      }`}
                    />

                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

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
          <div className="lg:col-span-2">
            <div className="sticky top-32 space-y-6">
              <div className="p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>

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
                          <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                            <item.icon className="w-5 h-5 text-purple-700" />
                          </span>

                          <div>
                            <p className="text-sm text-gray-500">
                              {item.label}
                            </p>

                            <p className="font-medium text-gray-900 dark:text-white group-hover:text-purple-700 transition-colors break-all">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-purple-700" />
                          </span>

                          <div>
                            <p className="text-sm text-gray-500">
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
              <div className="p-6 lg:p-8 rounded-3xl bg-purple-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quick Response
                </h4>

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
