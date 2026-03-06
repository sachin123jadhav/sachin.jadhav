import React from "react";
import {
  FaBullseye,
  FaBolt,
  FaUsers,
  FaLightbulb,
  FaThLarge,
  FaPalette,
  FaCheckCircle,
} from "react-icons/fa";

export default function DMSCaseStudy() {
  return (
    <div className="px-6 lg:px-8 py-8 space-y-12">
      {/* ================= Overview ================= */}
      <section>
        <h3 className="font-display text-lg font-semibold text-primary flex items-center gap-2">
          <FaBullseye className="text-accent w-5 h-5" />
          Overview
        </h3>

        <div className="grid lg:grid-cols-2 gap-6 mt-4">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border flex items-center justify-center">
            <div className="text-center">
              <FaThLarge className="w-12 h-12 text-accent mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Dashboard Preview</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Enterprise HRMS platform designed to simplify workforce management
            through role-based access, scalable UI architecture, and
            usability-first approach.
          </p>
        </div>
      </section>

      {/* ================= Challenge ================= */}
      <section>
        <h3 className="font-display text-lg font-semibold text-primary flex items-center gap-2">
          <FaBolt className="text-accent w-5 h-5" />
          The Challenge
        </h3>

        <ul className="mt-4 space-y-3">
          {[
            "Complex role-based permissions",
            "Manual HR workflows",
            "Poor visibility into approvals",
            "Limited reporting capabilities",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-2 h-2 mt-2 bg-accent rounded-full" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= Users ================= */}
      <section>
        <h3 className="font-display text-lg font-semibold text-primary flex items-center gap-2">
          <FaUsers className="text-accent w-5 h-5" />
          Users & Roles
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
          ].map((u, i) => (
            <div key={i} className="p-4 rounded-xl bg-secondary/50 border">
              <h4 className="font-semibold mb-2">{u.title}</h4>
              <p className="text-sm text-muted-foreground">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= UX Process ================= */}
      <section>
        <h3 className="font-display text-lg font-semibold text-primary flex items-center gap-2">
          <FaLightbulb className="text-accent w-5 h-5" />
          UX Process
        </h3>

        <div className="space-y-4 mt-4">
          {[
            "Stakeholder Interviews",
            "Information Architecture",
            "Wireframing",
            "High Fidelity UI",
            "Prototyping",
          ].map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-24 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                {step}
              </div>
              <p className="text-sm text-muted-foreground">
                Designed and validated through iterative feedback.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Frontend ================= */}
      <section>
        <h3 className="font-display text-lg font-semibold text-primary flex items-center gap-2">
          <FaBolt className="text-accent w-5 h-5" />
          Frontend Implementation
        </h3>

        <ul className="mt-4 space-y-2">
          {[
            "Reusable React components",
            "Responsive layouts",
            "Optimized performance",
            "Role-based UI rendering",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <FaCheckCircle className="w-4 h-4 text-accent mt-1" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= Outcome ================= */}
      <section>
        <h3 className="font-display text-lg font-semibold text-primary flex items-center gap-2">
          <FaBullseye className="text-accent w-5 h-5" />
          Outcome & Impact
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            { value: "22%", label: "Faster task completion" },
            { value: "35%", label: "Fewer support tickets" },
            { value: "3x", label: "Faster handoff" },
          ].map((m, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-accent/10 border border-accent/20"
            >
              <p className="text-accent text-xl font-bold">{m.value}</p>
              <p className="text-sm text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
