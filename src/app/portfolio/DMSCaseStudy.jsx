import React from "react";
import {
  FaBullseye,
  FaBolt,
  FaUsers,
  FaLightbulb,
  FaThLarge,
  FaCheckCircle,
} from "react-icons/fa";

export default function DMSCaseStudy() {
  return (
    <div className="px-6 lg:px-8 py-8 space-y-12">
      {/* ================= Overview ================= */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <FaBullseye className="text-purple-700 dark:text-purple-400 w-5 h-5" />
          Overview
        </h3>

        <div className="grid lg:grid-cols-2 gap-6 mt-4">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-100 to-slate-100 dark:from-purple-900/20 dark:to-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
            <div className="text-center">
              <FaThLarge className="w-12 h-12 text-purple-700 dark:text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Dashboard Preview
              </p>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            A B2B SaaS Document Management System for centralising document
            storage, versioning, approval routing, and audit trails — built
            around complex, role-dependent workflows.
          </p>
        </div>
      </section>

      {/* ================= Challenge ================= */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <FaBolt className="text-purple-700 dark:text-purple-400 w-5 h-5" />
          The Challenge
        </h3>

        <ul className="mt-4 space-y-3">
          {[
            "Documents scattered across shared drives and email attachments",
            "Approval routing handled manually, with no visibility into status",
            "No reliable version history or audit trail for compliance",
            "Permission sprawl across teams, projects, and document types",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="w-2 h-2 mt-2 bg-purple-600 rounded-full shrink-0" />
              <span className="text-slate-600 dark:text-slate-400">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= Users ================= */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <FaUsers className="text-purple-700 dark:text-purple-400 w-5 h-5" />
          Users &amp; Roles
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            {
              title: "Administrator",
              desc: "Configures workflows, document types, and access policies",
            },
            {
              title: "Contributor",
              desc: "Uploads, edits, and submits documents for review",
            },
            {
              title: "Reviewer / Approver",
              desc: "Reviews submissions, approves or returns with comments",
            },
            {
              title: "Auditor",
              desc: "Read-only access to version history and audit logs",
            },
          ].map((u) => (
            <div
              key={u.title}
              className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <h4 className="font-semibold mb-2 text-slate-900 dark:text-white">
                {u.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {u.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= UX Process ================= */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <FaLightbulb className="text-purple-700 dark:text-purple-400 w-5 h-5" />
          UX Process
        </h3>

        <div className="space-y-4 mt-4">
          {[
            { step: "Discover", note: "Stakeholder interviews and workflow mapping." },
            { step: "Structure", note: "Information architecture and navigation model." },
            { step: "Wireframe", note: "Low-fidelity flows for every role." },
            { step: "Design", note: "High-fidelity UI and a reusable component library." },
            { step: "Validate", note: "Interactive prototypes tested with real users." },
          ].map(({ step, note }) => (
            <div key={step} className="flex gap-4 items-start">
              <div className="w-28 shrink-0 h-14 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-xs font-medium text-purple-800 dark:text-purple-300">
                {step}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 pt-4">
                {note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Frontend ================= */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <FaBolt className="text-purple-700 dark:text-purple-400 w-5 h-5" />
          Frontend Implementation
        </h3>

        <ul className="mt-4 space-y-2">
          {[
            "Reusable React components shared across modules",
            "Responsive layouts for desktop and tablet workflows",
            "UI architecture tuned for data-heavy tables and lists",
            "Role-based UI rendering driven by permissions",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <FaCheckCircle className="w-4 h-4 text-purple-700 dark:text-purple-400 mt-1 shrink-0" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= Outcome ================= */}
      <section>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <FaBullseye className="text-purple-700 dark:text-purple-400 w-5 h-5" />
          Outcome &amp; Impact
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            { value: "22%", label: "Higher task completion" },
            { value: "38%", label: "Faster page loads" },
            { value: "90+", label: "Lighthouse score" },
            { value: "20+", label: "Modules on one design system" },
            { value: "25%", label: "Less UI rework after mentoring" },
            { value: "40+", label: "UX issues resolved" },
          ].map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-xl bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800"
            >
              <p className="text-purple-800 dark:text-purple-300 text-xl font-bold">
                {m.value}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
