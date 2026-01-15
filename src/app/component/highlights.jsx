"use client";

import React from "react";
import {
  MdBusinessCenter,
  MdDashboard,
  MdDesignServices,
  MdCode,
} from "react-icons/md";

const highlights = [
  {
    title: "B2B SaaS Product Design",
    desc: "Designing enterprise SaaS platforms with dashboards, role-based access, and workflow-driven interfaces.",
    icon: MdBusinessCenter,
  },
  {
    title: "Dashboard & Data-Heavy UI",
    desc: "Creating clear, structured dashboards and data-rich interfaces for fast, informed decision-making.",
    icon: MdDashboard,
  },
  {
    title: "Figma to Production",
    desc: "Translating Figma designs into production-ready UI with accurate frontend handoff.",
    icon: MdDesignServices,
  },
  {
    title: "UI/UX + Frontend Development",
    desc: "Combining UI/UX design with HTML, CSS, JavaScript, and React to deliver complete, usable products.",
    icon: MdCode,
  },
];

function Highlights() {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map(({ title, desc, icon: Icon }, index) => (
            <div
              key={title}
              className="group border border-gray-200 bg-[#f5f9ff] p-5 rounded-md
                         transition-all duration-300 hover:bg-blue-800
                         wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.15}s`}
            >
              <div
                className="w-[50px] h-[50px] bg-blue-800 rounded-sm grid place-items-center
                           transition-all duration-300 group-hover:bg-white
                           group-hover:rounded-[15px] group-hover:rotate-45
                           wow animate__animated animate__zoomIn"
                data-wow-delay={`${index * 0.15 + 0.2}s`}
              >
                <Icon
                  size={28}
                  className="text-white transition-colors duration-300
                             group-hover:text-blue-800 transform group-hover:-rotate-45"
                />
              </div>

              <h2 className="text-xl font-medium py-3 transition-colors duration-300 group-hover:text-white">
                {title}
              </h2>
              <p className="transition-colors duration-300 group-hover:text-gray-200">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
