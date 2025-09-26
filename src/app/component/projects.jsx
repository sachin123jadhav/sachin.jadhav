"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { FiX, FiExternalLink } from "react-icons/fi";

// Sample data — replace imageSrc with your own images (public/ or remote)
const PROJECTS = [
  {
    id: "p1",
    title: "E-Commerce Dashboard",
    category: "Wordpress",
    tags: ["React", "Tailwind", "Next.js"],
    year: 2024,
    imageSrc: "/projects/p1.jpg",
    description:
      "Admin dashboard for multi-vendor e-commerce with analytics, role-based access and realtime charts.",
    url: "#",
  },
  {
    id: "p2",
    title: "Branding & Web Design",
    category: "Design",
    tags: ["Figma", "Illustration"],
    year: 2023,
    imageSrc: "/projects/p2.jpg",
    description:
      "Full identity system and marketing site for a fintech startup.",
    url: "#",
  },
  {
    id: "p3",
    title: "Mobile Wallet App",
    category: "Mobile",
    tags: ["React Native", "Payments"],
    year: 2022,
    imageSrc: "/projects/p3.jpg",
    description:
      "Secure mobile wallet with QR payments and transaction history.",
    url: "#",
  },
  {
    id: "p4",
    title: "Marketing Landing",
    category: "Web Site",
    tags: ["Next.js", "Animation"],
    year: 2024,
    imageSrc: "/projects/p4.jpg",
    description: "Conversion-optimized marketing landing with A/B variations.",
    url: "#",
  },
  {
    id: "p5",
    title: "Illustration Pack",
    category: "Design",
    tags: ["Illustrator", "Concept"],
    year: 2021,
    imageSrc: "/projects/p5.jpg",
    description: "Custom illustrations for onboarding and empty states.",
    url: "#",
  },
];

export default function PortfolioFilter() {
 
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

const categories = useMemo(() => {
  const set = new Set(PROJECTS.map((p) => p.category));
  return Array.from(set); // no "All"
}, []);
   const [activeCategory, setActiveCategory] = useState(categories[0]);
  
 const filtered = useMemo(() => {
   return PROJECTS.filter((p) => {
     const byCategory = p.category === activeCategory;
     const byQuery = [p.title, p.description, p.tags.join(" ")]
       .join(" ")
       .toLowerCase()
       .includes(query.toLowerCase());
     return byCategory && byQuery;
   });
 }, [activeCategory, query]);


  return (
    <>
      <section id="projects" className="relative md:py-24 py-16">
        <div className="container lg mx-auto">
          <div className="flex flex-col justify-between items-center mb-10">
            <h6 className="text-orange-600 text-base font-medium mb-2 ">
              <span className="inline-block w-[20px] h-[1.5px] bg-orange-600 transform translate-y-[-5px] mr-2.5"></span>{" "}
              Portfolio
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Merging Design Thinking with Front-End Precision
            </h3>
          </div>

          <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-center gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div
                className="flex flex-wrap gap-2"
                role="tablist"
                aria-label="Project categories"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 cursor-pointer ${
                      activeCategory === cat
                        ? "bg-indigo-600 text-white shadow"
                        : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md px-3 py-1">
                <input
                  aria-label="Search projects"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 w-48"
                />
                <button
                  onClick={() => setQuery("")}
                  className="ml-2 text-sm text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              </div>
            </div>
          </header>

          <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="group bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelected(p)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
                  aria-label={`Open project ${p.title}`}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {p.category} • {p.year}
                        </p>
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-indigo-600 transition-colors">
                        ›
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-3">
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}

              {filtered.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No projects found.
                </div>
              )}
            </div>
          </main>
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white dark:bg-slate-900 rounded-lg max-w-3xl w-full overflow-auto shadow-xl">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800"
                  onClick={() => setSelected(null)}
                  aria-label="Close modal"
                >
                  <FiX size={20} />
                </button>

                <div className="w-full h-64 relative">
                  <Image
                    src={selected.imageSrc}
                    alt={selected.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{selected.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {selected.category} • {selected.year}
                  </p>
                  <p className="mt-4 text-gray-700 dark:text-gray-200">
                    {selected.description}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm"
                    >
                      <FiExternalLink size={16} />
                      Visit Project
                    </a>

                    <div className="flex flex-wrap gap-2">
                      {selected.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setSelected(null)}
                      className="px-4 py-2 rounded-md border text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
