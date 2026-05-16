"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "sachin123jadhav@gmail.com",
      href: "mailto:sachin123jadhav@gmail.com",
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
      href: "https://linkedin.com/in/sachin123jadhav",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Pune, India",
      href: null,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="min-h-screen bg-slate-100 dark:bg-black-800 py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Let&apos;s Work Together
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            If you're looking for a Senior UI/UX Designer who can also build and
            support frontend implementation for SaaS and enterprise products,
            feel free to get in touch.
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-700 text-white hover:bg-purple-800 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
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

export default Contact;
