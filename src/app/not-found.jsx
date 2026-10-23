import React from "react";
import { FiArrowRight } from "react-icons/fi";
import AnimatedButton from "./component/button";

export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-gradient-to-br from-[#faf8fd] via-[#f2edf8] to-[#edf6f7] pt-24 pb-16 dark:from-[#0f172a] dark:via-[#172554] dark:to-[#1e293b]">
      <div className="container text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#07bdd5]">
          Error 404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-purple-800 dark:text-white md:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-700 dark:text-slate-300">
          The link may be old or mistyped. You can head back home or look
          through my work instead.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <AnimatedButton
            href="/"
            label="Back to Home"
            className="bg-gradient-to-br from-[#7047c3] to-[#7047c3]"
          />
          <AnimatedButton
            href="/portfolio"
            label="View Portfolio"
            icon={<FiArrowRight className="inline ms-2 text-xl" />}
          />
        </div>
      </div>
    </section>
  );
}
