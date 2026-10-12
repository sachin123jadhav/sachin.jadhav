import React from "react";
import {
  FaBullseye,
  FaBolt,
  FaUsers,
  FaLightbulb,
  FaThLarge,
  FaCheckCircle,
} from "react-icons/fa";

export default function HRMSCaseStudy() {
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
            Enterprise HRMS platform designed to simplify workforce management
            through role-based access, scalable UI architecture, and a
            usability-first approach.
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
            "Complex role-based permissions",
            "Manual HR workflows",
            "Poor visibility into approvals",
            "Limited reporting capabilities",
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
              title: "HR Admin",
              desc: "Manages employees, payroll, policies and permissions",
            },
            {
              title: "Manager",
              desc: "Approves leaves, reviews performance",
            },
            {
              title: "Employee",
              desc: "Views payslips, applies leave, updates profile",
            },
          ].map((u) => (
            <div
              key={u.title}
              className="p-4 rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600"
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
            "Stakeholder Interviews",
            "Information Architecture",
            "Wireframing",
            "High Fidelity UI",
            "Prototyping",
          ].map((step) => (
            <div key={step} className="flex gap-4 items-start">
              <div className="w-28 shrink-0 h-14 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-xs font-medium text-purple-800 dark:text-purple-300">
                {step}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 pt-4">
                Designed and validated through iterative feedback.
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
            "Reusable React components",
            "Responsive layouts",
            "Optimized performance",
            "Role-based UI rendering",
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
            { value: "22%", label: "Faster task completion" },
            { value: "35%", label: "Fewer support tickets" },
            { value: "3x", label: "Faster handoff" },
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
