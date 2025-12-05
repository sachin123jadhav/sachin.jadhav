"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { FiX, FiExternalLink } from "react-icons/fi";

import { PROJECTS } from "../data/experienceData";

export default function PortfolioFilter() {
  const [selected, setSelected] = useState(null);

  // Generate unique categories
  const categories = useMemo(() => {
    const set = new Set(PROJECTS.map((p) => p.category));
    return Array.from(set);
  }, []);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter only by category
  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section id="projects" className="relative md:py-4 py-16 md:pb-12">
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

          {/* Category Filters (Search Removed) */}
          <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-center gap-4">
            <div className="flex flex-wrap gap-2" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white shadow"
                      : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          {/* Projects Grid */}
          <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <article
                  key={p.id}
                  className="group bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelected(p)}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {p.category} • {p.year}
                    </p>

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <div className="bg-white dark:bg-slate-900 rounded-lg max-w-3xl w-full shadow-xl">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800"
                  onClick={() => setSelected(null)}
                >
                  <FiX size={20} />
                </button>

                <div className="w-full h-64 relative">
                  <Image
                    src={selected.imageSrc}
                    alt={selected.title}
                    fill
                    className="object-cover rounded-t-lg object-top"
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
