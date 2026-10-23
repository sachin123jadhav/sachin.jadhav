import React from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import AnimatedButton from "./button";

const CONTACT_EMAIL = "sachin123jadhav@gmail.com";

const contactItems = [
  { icon: FiPhone, label: "Phone", value: "+91 9890122027", href: "tel:+919890122027" },
  { icon: FiMail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: FiMapPin, label: "Location", value: "Pune, India", href: null },
];

/**
 * Home page contact teaser. The full form lives on /contact.
 */
export default function Contact() {
  return (
    <section
      className="section section--band relative bg-gray-50 dark:bg-slate-800"
      id="contact"
      aria-labelledby="home-contact-title"
    >
      <div className="container">
        <div className="mx-auto max-w-xl text-center" data-reveal>
          <h2
            id="home-contact-title"
            className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl"
          >
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Need UI/UX expertise for a SaaS or enterprise product? Let&apos;s connect.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactItems.map(({ icon: Icon, label, value, href }, index) => {
            const body = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-purple-700 dark:bg-purple-900/30 dark:group-hover:bg-purple-500">
                  <Icon className="h-5 w-5 text-purple-700 transition-colors duration-300 group-hover:text-white dark:text-purple-300" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-slate-500 dark:text-slate-400">{label}</span>
                  <span className="block break-words font-medium text-slate-900 dark:text-white">
                    {value}
                  </span>
                </span>
              </>
            );

            const cardClass =
              "group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-600 dark:bg-slate-700";

            return (
              <li key={label} data-reveal style={{ "--reveal-delay": `${index * 100}ms` }}>
                {href ? (
                  <a href={href} className={`lift ${cardClass}`}>
                    {body}
                  </a>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <AnimatedButton
            href="/contact"
            label="Send a Message"
            icon={<FiArrowRight className="inline ms-2 text-xl" />}
          />
        </div>
      </div>
    </section>
  );
}
