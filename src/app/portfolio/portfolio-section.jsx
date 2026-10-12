"use client";

import React, { useEffect, useState } from "react";
import Badge from "../component/badge";
import AnimatedButton from "../component/button";
import { FiX, FiArrowRight } from "react-icons/fi";

import Image from "next/image";
import hrms from "./../../../public/images/HRMS.jpg";
import barva from "./../../../public/images/Barva.jpg";
import dms from "./../../../public/images/websites/DMS.jpg";

import HRMSCaseStudy from "./HRMSCaseStudy";
import DMSCaseStudy from "./DMSCaseStudy";

const caseStudies = {
  hrms: { title: "Workfusion HRMS", Component: HRMSCaseStudy },
  dms: { title: "Document Management System", Component: DMSCaseStudy },
};

function CaseStudyModal({ caseKey, onClose }) {
  const study = caseStudies[caseKey];

  useEffect(() => {
    if (!study) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [study, onClose]);

  if (!study) return null;

  const { title, Component } = study;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/70 flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} case study`}
    >
      <div
        className="relative bg-white dark:bg-slate-900 rounded-2xl w-full max-w-4xl my-8 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 p-6 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10 bg-white dark:bg-slate-900 rounded-t-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
            {title} — Case Study
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <FiX size={20} />
          </button>
        </div>

        <Component />
      </div>
    </div>
  );
}

function PortfolioSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const closeCaseStudy = () => setActiveCaseStudy(null);

  return (
    <section className="bg-[#faf9fb] py-20">
      <div className="container mx-auto px-4">
        {/* -------------------- HRMS PROJECT -------------------- */}

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="aspect-video rounded-2xl border overflow-hidden group">
              <Image
                src={hrms}
                alt="Workfusion HRMS project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-2">
              <Badge label="Figma" textColor="#442673" />
              <Badge label="Photoshop" textColor="#442673" />
              <Badge label="UI/UX" textColor="#442673" />
              <Badge label="React" textColor="#442673" />
              <Badge label="Tailwind CSS" textColor="#442673" />
              <Badge label="JavaScript" textColor="#442673" />
            </div>

            <h2 className="text-2xl text-purple-700 mt-6 font-semibold">
              Workfusion HRMS
            </h2>

            <p className="text-[#07bdd5]">
              UI Team Lead, UI/UX Designer &amp; Frontend Developer
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Enterprise HR Management System (HRMS)
            </p>

            <p className="text-purple-700 mt-6 font-semibold">
              Project Overview
            </p>

            <p className="text-gray-700 mt-2">
              Workfusion HRMS is a comprehensive Human Resource Management
              System designed to streamline and automate HR operations including
              employee records, attendance, leave requests, payroll insights and
              internal communication.
            </p>

            <p className="text-gray-700 mt-3">
              The goal was to create a scalable and intuitive HR platform that
              simplifies complex HR workflows for both employees and
              administrators.
            </p>

            <AnimatedButton
              label="View Case Study"
              onClick={() => setActiveCaseStudy("hrms")}
              icon={<FiArrowRight className="inline ms-2 text-xl" />}
              className="mt-6"
            />
          </div>
        </div>

        {/* -------------------- DETAILS SECTION -------------------- */}

        <div className="grid lg:grid-cols-3 gap-10 mt-12">
          <div>
            <p className="text-purple-700 font-semibold">UI/UX Design</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Led the UI/UX design team and ensured design consistency.</li>
              <li>Designed complete UI flows using Figma.</li>
              <li>Created wireframes and reusable design systems.</li>
              <li>Designed visual assets using Photoshop.</li>
              <li>Simplified complex HR workflows.</li>
            </ul>
          </div>

          <div>
            <p className="text-purple-700 font-semibold">
              Frontend Development
            </p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Converted Figma designs into responsive UI.</li>
              <li>Built reusable React components.</li>
              <li>Ensured cross-browser compatibility.</li>
              <li>Optimized performance and layout structure.</li>
            </ul>
          </div>

          <div>
            <p className="text-purple-700 font-semibold">Key Features</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>
                <strong>Employee Dashboard</strong> – Overview of employees.
              </li>
              <li>
                <strong>Attendance &amp; Leave</strong> – Leave management.
              </li>
              <li>
                <strong>Profile Management</strong> – Employee data management.
              </li>
              <li>
                <strong>Role-Based Access</strong> – HR admin &amp; employee
                roles.
              </li>
              <li>
                <strong>HR Analytics</strong> – Workforce insights.
              </li>
            </ul>
          </div>
        </div>

        {/* -------------------- SECOND PROJECT : Barva Skin Therapie -------------------- */}

        <div className="grid lg:grid-cols-12 gap-10 items-center mt-24">
          {/* Content */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-2">
              <Badge label="Figma" textColor="#442673" />
              <Badge label="Photoshop" textColor="#442673" />
              <Badge label="Shopify" textColor="#442673" />
              <Badge label="Liquid" textColor="#442673" />
              <Badge label="HTML/CSS" textColor="#442673" />
              <Badge label="JavaScript" textColor="#442673" />
            </div>

            <h2 className="text-2xl text-purple-700 mt-6 font-semibold">
              Barva Skin Therapie
            </h2>

            <p className="text-[#07bdd5]">
              UI/UX Designer &amp; Frontend Developer
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Shopify E-commerce Website
            </p>

            <p className="text-purple-700 mt-6 font-semibold">
              Project Overview
            </p>

            <p className="text-gray-700 mt-2">
              Barva Skin Therapie is a Shopify-based e-commerce platform
              designed to showcase premium products through a clean and modern
              online shopping experience.
            </p>

            <p className="text-gray-700 mt-3">
              The project focused on building an engaging storefront while
              improving UI elements during development to enhance product
              visibility, layout balance, and customer interaction.
            </p>

            <p className="text-purple-700 mt-6 font-semibold">
              My Role &amp; Responsibilities
            </p>

            <p className="text-gray-700 mt-2">
              Designed the homepage UI mockup and enhanced the interface during
              development to improve usability, visual hierarchy, and product
              presentation.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-6">
            <div className="aspect-video rounded-2xl border overflow-hidden group">
              <Image
                src={barva}
                alt="Barva Skin Therapie Shopify project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Barva Skin Therapie DETAILS */}

        <div className="grid lg:grid-cols-3 gap-10 mt-12">
          <div>
            <p className="text-purple-700 font-semibold">UI/UX Design</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Created homepage UI mockup using Figma.</li>
              <li>Improved typography, spacing and layout balance.</li>
              <li>Enhanced product card UI.</li>
              <li>Optimized CTA placement and user flow.</li>
              <li>Maintained brand design consistency.</li>
            </ul>
          </div>

          <div>
            <p className="text-purple-700 font-semibold">
              Frontend Development
            </p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Developed Shopify storefront using Liquid.</li>
              <li>Implemented responsive layouts.</li>
              <li>Improved UI components during development.</li>
              <li>Optimized product collections and layouts.</li>
            </ul>
          </div>

          <div>
            <p className="text-purple-700 font-semibold">Key Features</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>
                <strong>Modern Homepage</strong> – Brand-focused hero section.
              </li>
              <li>
                <strong>Product Collections</strong> – Organized browsing.
              </li>
              <li>
                <strong>Product Pages</strong> – Clean product presentation.
              </li>
              <li>
                <strong>Responsive Design</strong> – Mobile friendly layout.
              </li>
              <li>
                <strong>Optimized UI</strong> – Improved product display.
              </li>
            </ul>
          </div>
        </div>

        {/* -------------------- THIRD PROJECT : Document Management System -------------------- */}

        <div className="grid lg:grid-cols-12 gap-10 items-center mt-24">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="aspect-video rounded-2xl border overflow-hidden group">
              <Image
                src={dms}
                alt="B2B SaaS Document Management System"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-2">
              <Badge label="Figma" textColor="#442673" />
              <Badge label="React" textColor="#442673" />
              <Badge label="UI/UX" textColor="#442673" />
              <Badge label="Design Systems" textColor="#442673" />
              <Badge label="Dashboards" textColor="#442673" />
            </div>

            <h2 className="text-2xl text-purple-700 mt-6 font-semibold">
              Document Management System
            </h2>

            <p className="text-[#07bdd5]">
              UI/UX &amp; Frontend Lead
            </p>

            <p className="text-gray-500 text-sm mt-1">
              B2B SaaS Platform — Metamind Systems
            </p>

            <p className="text-purple-700 mt-6 font-semibold">
              Project Overview
            </p>

            <p className="text-gray-700 mt-2">
              A B2B SaaS Document Management System for centralising document
              storage, versioning, approval routing, and audit trails — built
              around complex, role-dependent workflows.
            </p>

            <p className="text-gray-700 mt-3">
              The goal was to make heavy, compliance-driven document workflows
              understandable for administrators, contributors, approvers, and
              auditors alike.
            </p>

            <AnimatedButton
              label="View Case Study"
              onClick={() => setActiveCaseStudy("dms")}
              icon={<FiArrowRight className="inline ms-2 text-xl" />}
              className="mt-6"
            />
          </div>
        </div>

        {/* DMS DETAILS */}

        <div className="grid lg:grid-cols-3 gap-10 mt-12">
          <div>
            <p className="text-purple-700 font-semibold">UI/UX Design</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Led end-to-end UI/UX design for the platform.</li>
              <li>Mapped workflows and role-based access in Figma.</li>
              <li>Created 50+ wireframes and interactive prototypes.</li>
              <li>Designed enterprise dashboards and data-heavy interfaces.</li>
              <li>Built and maintained a design system across 20+ modules.</li>
            </ul>
          </div>

          <div>
            <p className="text-purple-700 font-semibold">
              Frontend Development
            </p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Built reusable React components across modules.</li>
              <li>Optimized UI architecture and frontend performance.</li>
              <li>Implemented role-based UI rendering.</li>
              <li>Reached 90+ Lighthouse scores.</li>
            </ul>
          </div>

          <div>
            <p className="text-purple-700 font-semibold">Key Features</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>
                <strong>Document Repository</strong> – Centralised storage.
              </li>
              <li>
                <strong>Version History</strong> – Full revision tracking.
              </li>
              <li>
                <strong>Approval Workflows</strong> – Configurable routing.
              </li>
              <li>
                <strong>Role-Based Access</strong> – Admin, contributor,
                approver, auditor.
              </li>
              <li>
                <strong>Audit Trails</strong> – Compliance-ready logging.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {activeCaseStudy && (
        <CaseStudyModal
          caseKey={activeCaseStudy}
          onClose={closeCaseStudy}
        />
      )}
    </section>
  );
}

export default PortfolioSection;
