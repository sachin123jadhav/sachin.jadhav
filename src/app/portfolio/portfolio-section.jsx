import React from "react";
import Badge from "../component/badge";
import AnimatedButton from "../component/button";
import { FiDownload, FiExternalLink } from "react-icons/fi";

import Image from "next/image";
import hrms from "./../../../public/images/HRMS.jpg";
import barva from "./../../../public/images/Barva.jpg";
import dms from "./../../../public/images/websites/DMS.jpg";
import extentiaPreview from "./../../../public/images/websites/extentia-design-preview.svg";

/**
 * Downloadable portfolio PDF with the full UI/UX case studies. Page numbers in
 * the notes below refer to this file — update them if the PDF changes.
 */
const PORTFOLIO_PDF = "/images/Sachin_Jadhav_Portfolio.pdf";

/**
 * Projects in display order. Image sides alternate down the page: the first
 * project has its image on the left, the second on the right, and so on.
 *
 * cta.kind:
 *   "portfolio" - design work covered in the PDF; downloads PORTFOLIO_PDF
 *   "website"   - live site, opens `href` in a new tab
 */
const projects = [
  {
    id: "extentia",
    category: "Corporate Website",
    title: "Extentia Web UI Design",
    role: "UI/UX Designer / Web Designer",
    meta: "Corporate website redesign · March–September 2022",
    image: extentiaPreview,
    imageAlt:
      "Illustrative preview of Extentia's responsive website and services page designs",
    badges: ["Figma", "UI/UX Design", "Responsive Web Design", "Corporate Website"],
    overview: [
      "A corporate web design project focused on a polished, modern, and consistent digital experience for Extentia. The work improves navigation, typography hierarchy, and content clarity across the main website and its service pages, with layouts prepared for desktop and mobile screens.",
    ],
    cta: { kind: "portfolio" },
    note: "Preview illustration based on the project layouts. View Portfolio downloads the full designs as a PDF (7.6 MB) — pages 5–7.",
    details: [
      {
        heading: "UI/UX Design",
        items: [
          "Organized corporate content into clear navigation and page hierarchies.",
          "Designed responsive desktop and mobile layouts for key pages and services.",
          "Established a legible Roboto typography scale and consistent visual hierarchy.",
          "Defined brand and supporting color palettes for a cohesive interface.",
          "Created reusable grid, card, and form patterns with clear interactive states.",
        ],
      },
      {
        heading: "Key Features",
        features: [
          ["Corporate navigation", "Direct paths to services, technology, industries, media, careers, and company information."],
          ["Service landing pages", "Distinct page headers, supporting illustrations, and structured content."],
          ["Responsive layouts", "Website content adapted for desktop and mobile browsing."],
          ["Reusable content cards", "Consistent presentation for illustrations, titles, summaries, and links."],
          ["Accessible interface controls", "Clear calls to action, form controls, and interactive states."],
        ],
      },
    ],
  },
  {
    id: "hrms",
    category: "Enterprise HRMS · Mobile App",
    title: "WorkFusion HRMS",
    role: "UI/UX Designer / Product Designer",
    meta: "Employee self-service app · February–June 2024",
    image: hrms,
    imageAlt: "WorkFusion HRMS login and dashboard screens",
    badges: ["Figma", "Product UX", "Information Architecture", "Mobile UI", "Design System"],
    overview: [
      "A mobile-first employee self-service app for WorkFusion HRMS — attendance check-in, leave and approvals, company information and requests — with separate views for employees and for approvers or HR.",
      "My contribution: information architecture, mobile UI design for the modules shown, and the color and sizing tokens behind them.",
    ],
    cta: { kind: "portfolio" },
    note: "The PDF (7.6 MB) covers the flows, role-based views, design system and UI screens — pages 8–16.",
    details: [
      {
        heading: "UX & Information Architecture",
        items: [
          "Grouped ten modules — attendance, leave, holidays, events, staff, visitors and more — into one Services grid with module sub-menus.",
          "A persistent header and bottom bar (Services · Home · Add · Approvals · Chat), so people always know where they are.",
          "Placed the daily check-in in one card at the top of Home, offering only the next action: Check-In, then Check-Out.",
          "Designed key modules twice: for the employee raising a request and for the approver or HR acting on it.",
        ],
      },
      {
        heading: "UI & Design System",
        items: [
          "Mobile screens, forms, list cards and status chips.",
          "Color tokens: 11 ramps from 50 to 950, plus primary, error, warning and success sets.",
          "Text and surface tokens and reusable components — inputs, avatars, checkboxes, radios, badges, pagination.",
          "One status-chip style and card layout reused across lists for consistency.",
          "Empty, success and pop-up states laid out as screen sequences.",
        ],
      },
      {
        heading: "Key Features",
        features: [
          ["Attendance Check-In", "Assigned shift, running timer and one clear action."],
          ["Leave & Approvals", "Balances for employees; approve or decline for approvers."],
          ["Services Grid", "Ten modules in one Services grid, one tap from Home."],
          ["Role-Based Views", "Employee and approver / HR versions of key modules."],
          ["Self-Service", "Profile, requests, suggestions and appraisal details."],
        ],
      },
    ],
  },
  {
    id: "barva",
    category: "E-commerce",
    title: "Barva Skin Therapie",
    role: "UI/UX Designer & Frontend Developer",
    meta: "Shopify E-commerce Website",
    image: barva,
    imageAlt: "Barva Skin Therapie Shopify project",
    badges: ["Figma", "Photoshop", "Shopify", "Liquid", "HTML/CSS", "JavaScript"],
    overview: [
      "Barva Skin Therapie is a Shopify-based e-commerce platform designed to showcase premium products through a clean and modern online shopping experience.",
      "The project focused on building an engaging storefront while improving UI elements during development to enhance product visibility, layout balance, and customer interaction.",
      "My role: designed the homepage UI mockup and enhanced the interface during development to improve usability, visual hierarchy, and product presentation.",
    ],
    cta: { kind: "website", href: "https://barvaskintherapie.com/" },
    details: [
      {
        heading: "UI/UX Design",
        items: [
          "Created homepage UI mockup using Figma.",
          "Improved typography, spacing and layout balance.",
          "Enhanced product card UI.",
          "Optimized CTA placement and user flow.",
          "Maintained brand design consistency.",
        ],
      },
      {
        heading: "Frontend Development",
        items: [
          "Developed Shopify storefront using Liquid.",
          "Implemented responsive layouts.",
          "Improved UI components during development.",
          "Optimized product collections and layouts.",
        ],
      },
      {
        heading: "Key Features",
        features: [
          ["Modern Homepage", "Brand-focused hero section."],
          ["Product Collections", "Organized browsing."],
          ["Product Pages", "Clean product presentation."],
          ["Responsive Design", "Mobile friendly layout."],
          ["Optimized UI", "Improved product display."],
        ],
      },
    ],
  },
  {
    id: "dms",
    category: "Enterprise Application",
    title: "Document Management System",
    role: "UI/UX Designer",
    meta: "Desktop web · Document lifecycle · January–August 2025",
    image: dms,
    imageAlt: "Document Management System dashboard and file manager screens",
    badges: ["Figma", "Enterprise UX", "Information Architecture", "AI Workspace", "Dashboards"],
    overview: [
      "A structured document experience for managing files, access permissions, workflows, and document history — bringing files, users, branches, permissions, and document actions into one connected workspace.",
      "The design work makes common actions easier to find while keeping access and document history understandable. The latest designs extend this into an AI-assisted workspace: document intelligence in the file manager, intelligent forms, a conversational copilot and OCR.",
    ],
    cta: { kind: "portfolio" },
    note: "The PDF (7.6 MB) covers the information architecture, AI workspace, forms and key UX challenges — pages 17–24.",
    details: [
      {
        heading: "UX & Information Architecture",
        items: [
          "Structured the relationship between users, branches, files, document properties, and configuration.",
          "Mapped document actions to permissions, so people only see the actions available to them.",
          "Gave lifecycle actions — update, move, archive, bin — clear labels and predictable placement.",
          "Accounted for version history, audit logs, workflow assignment, reminders, email, and signatures.",
        ],
      },
      {
        heading: "UI Design",
        items: [
          "Dashboard with an AI daily brief, alerts, file activity, recent files and reminders.",
          "File manager with one-click AI actions and an AI-tagged document list.",
          "Review queue with due date, priority, AI risk score and in-row approval.",
          "Intelligent form builder with an AI assistant and form analytics.",
          "Copilot and OCR scanner entry points.",
        ],
      },
      {
        heading: "Key Features",
        features: [
          ["AI Document Workspace", "Summaries, clause highlights, extracted dates and risks."],
          ["Permission-Aware Actions", "View, download, update, share, lock, archive, delete."],
          ["Sharing & Retention", "Secure links with expiry, archives and compliance."],
          ["Intelligent Forms", "Build, publish and review forms with AI help."],
          ["Copilot & OCR", "Plain-language search and scan-to-data."],
        ],
      },
    ],
  },
];

function ProjectAction({ cta }) {
  if (cta.kind === "website") {
    return (
      <AnimatedButton
        href={cta.href}
        target="_blank"
        label="Visit Website"
        icon={<FiExternalLink className="inline ms-2 text-xl" />}
      />
    );
  }

  return (
    <AnimatedButton
      href={PORTFOLIO_PDF}
      download="Sachin_Jadhav_Portfolio.pdf"
      label="View Portfolio"
      icon={<FiDownload className="inline ms-2 text-xl" />}
    />
  );
}

function ProjectCard({ project, index }) {
  // Even positions (1st, 3rd, ...) keep the image left; odd ones flip it right.
  const imageRight = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");
  const titleId = `${project.id}-title`;

  return (
    <article id={project.id} aria-labelledby={titleId} className="scroll-mt-28">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Image */}
        <div
          className={`lg:col-span-6 ${imageRight ? "lg:order-2" : ""}`}
          data-reveal={imageRight ? "right" : "left"}
        >
          <div className="lift group rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-600 dark:bg-slate-700">
            <div className="aspect-video overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.imageAlt}
                sizes="(min-width: 960px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`lg:col-span-6 ${imageRight ? "lg:order-1" : ""}`}
          data-reveal={imageRight ? "left" : "right"}
          style={{ "--reveal-delay": "120ms" }}
        >
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span className="text-purple-700 dark:text-purple-300">{number}</span>
            <span className="h-px w-8 bg-slate-300 dark:bg-slate-500" aria-hidden="true" />
            {project.category}
          </p>

          <h2
            id={titleId}
            className="mt-3 text-2xl font-semibold text-purple-700 dark:text-purple-300 md:text-3xl"
          >
            {project.title}
          </h2>
          <p className="mt-1 font-medium text-[#07bdd5]">{project.role}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{project.meta}</p>

          <div className="mt-5 flex flex-wrap gap-y-2">
            {project.badges.map((label) => (
              <Badge
                key={label}
                label={label}
                textColor="text-purple-700 dark:text-purple-300"
              />
            ))}
          </div>

          <div className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <ProjectAction cta={project.cta} />
            {project.note && (
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                {project.note}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Details */}
      <div
        data-reveal
        className={`mt-10 grid grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-600 dark:bg-slate-700 md:grid-cols-2 lg:p-8 ${
          project.details.length > 2 ? "lg:grid-cols-3" : ""
        }`}
      >
        {project.details.map((column) => (
          <div key={column.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300">
              {column.heading}
            </h3>

            <ul className="bullet-list mt-4 space-y-2.5 text-gray-700 dark:text-gray-300">
              {column.items?.map((item) => (
                <li key={item}>{item}</li>
              ))}

              {column.features?.map(([name, desc]) => (
                <li key={name}>
                  <strong className="font-semibold text-slate-900 dark:text-white">{name}</strong>
                  {" — "}
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

function PortfolioSection() {
  return (
    <section className="section section--band bg-[#faf9fb] dark:bg-slate-800">
      <div className="container mx-auto space-y-20 lg:space-y-28">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
