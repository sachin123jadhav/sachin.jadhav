"use client";

import React from "react";

function BreadCrumb({
  title = "About Me",
  description = "A Senior UI/UX Designer and Frontend Developer with a passion for creating beautiful, functional, and user-centric digital experiences.",
}) {
  return (
    <section
      className="
        relative
        pt-16 pb-12 md:pt-24 md:pb-14
        bg-gradient-to-br from-[#faf8fd] via-[#f2edf8] to-[#edf6f7]
        dark:bg-slate-900
      "
    >
      <div className="container">
        <div className="grid grid-cols-1 pt-8 max-w-3xl">
          <h1
            className="
              mb-4
              text-2xl sm:text-3xl lg:text-4xl
              font-semibold
              text-purple-800 dark:text-white
              font-[var(--font-rubik)]
            "
          >
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default BreadCrumb;
