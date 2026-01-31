"use client";

import React, { useState } from "react";
import Badge from "../component/badge";
import { FaSearch, FaRocket, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

import Image from "next/image";
import hrms from "./../../../public/images/HRMS.jpg";

import HRMSCaseStudy from "./HRMSCaseStudy";
import DMSCaseStudy from "./DMSCaseStudy"; // ✅ ADD THIS

/* ---------------------------------- */
/* DATA */
/* ---------------------------------- */

const CASE_STUDIES = [
  {
    id: "hrms",
    title: "Workfusion HRMS",
    role: "UI/UX Designer & Frontend Developer",
    challenge:
      "Complex HR workflows spanning multiple user roles with different permission levels.",
    solution: [
      "User Research & Flows",
      "Wireframes & IA",
      "High-Fidelity Design",
      "Prototype & Handoff",
    ],
    outcome: [
      "22% Improvement in task completion rate",
      "35% Reduction in support tickets",
      "3x Faster design-to-dev handoff",
    ],
    image: hrms,
    description:
      "Enterprise HRMS platform designed to simplify workforce management.",
  },

  {
    id: "dms",
    title: "Document Management System",
    role: "UI/UX Designer & Frontend Developer",
    challenge:
      "Users struggled with document discovery in repositories containing 100,000+ files.",
    solution: [
      "Competitive Analysis",
      "Wireframes & IA",
      "Information Architecture",
      "UI Design",
    ],
    outcome: [
      "38% Reduction in page load time",
      "90+ Lighthouse performance score",
      "45% Faster document retrieval",
    ],
    image: hrms,
    description: "Fast, searchable document system with optimized navigation.",
  },
];

const CASE_STUDY_COMPONENTS = {
  hrms: HRMSCaseStudy,
  dms: DMSCaseStudy,
};

/* ---------------------------------- */
/* COMPONENT */
/* ---------------------------------- */

function PortfolioSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  return (
    <section className="bg-[#faf9fb] py-20">
      <div className="container space-y-24">
        {/* PROJECT LIST */}
        {CASE_STUDIES.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* IMAGE */}
            <div
              className={`lg:col-span-6 ${
                index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="relative group aspect-video rounded-2xl overflow-hidden border">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button
                    onClick={() => setActiveCaseStudy(item)}
                    className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-purple-700"
                  >
                    View Case Study
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div
              className={`lg:col-span-6 ${
                index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div>
                <Badge label="Figma" />
                <Badge label="UI/UX" />
                <Badge label="React" />
                <Badge label="Tailwind" />
              </div>

              <h2 className="text-2xl text-purple-700 mt-6 font-semibold">
                {item.title}
              </h2>

              <p className="text-[#07bdd5]">{item.role}</p>

              <p className="text-purple-700 mt-4 font-semibold">
                The Challenge
              </p>
              <p>{item.challenge}</p>

              <p className="text-purple-700 mt-4 font-semibold">Solution</p>

              <ul className="space-y-2 mt-2">
                {item.solution.map((s, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaRocket className="text-blue-500" />
                    {s}
                  </li>
                ))}
              </ul>

              <p className="text-purple-700 mt-4 font-semibold">Outcome</p>

              <ul className="space-y-2 mt-2">
                {item.outcome.map((o, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaSearch className="text-blue-500" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeCaseStudy &&
        (() => {
          const CaseStudyComponent = CASE_STUDY_COMPONENTS[activeCaseStudy.id];

          return (
            <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
              <div className="bg-white max-w-5xl w-full rounded-2xl relative">
                {/* HEADER */}
                <div className="flex items-center justify-between p-6 border-b">
                  <h3 className="text-2xl font-semibold text-purple-700">
                    {activeCaseStudy.title} – Case Study
                  </h3>

                  <button
                    onClick={() => setActiveCaseStudy(null)}
                    className="text-gray-500 hover:text-black"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* BODY */}
                <div className="max-h-[80vh] overflow-y-auto">
                  {CaseStudyComponent ? (
                    <CaseStudyComponent />
                  ) : (
                    <div className="p-6">{activeCaseStudy.description}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
    </section>
  );
}

export default PortfolioSection;
