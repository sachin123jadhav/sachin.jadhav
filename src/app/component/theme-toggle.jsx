"use client";

import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../providers/ThemeProvider";

/**
 * Fixed-position light / dark mode switch.
 */
export default function ThemeToggle() {
  const { isDark, toggleMode } = useTheme();

  return (
    <div className="fixed right-4 top-1/2 z-40 -translate-y-1/2 sm:right-6">
      <button
        type="button"
        onClick={toggleMode}
        role="switch"
        aria-checked={isDark}
        aria-label="Dark mode"
        title={isDark ? "Turn light mode on" : "Turn dark mode on"}
        className={`relative inline-flex h-14 w-8 cursor-pointer items-center rounded-full border border-slate-300 p-1 shadow-lg transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:border-slate-600 ${
          isDark ? "bg-purple-700 dark:bg-purple-500" : "bg-white dark:bg-slate-700"
        }`}
      >
        <span className="sr-only">Dark mode</span>
        <FiSun className="absolute top-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 text-amber-500" aria-hidden="true" />
        <FiMoon className="absolute bottom-2 left-1/2 h-3.5 w-3.5 -translate-x-1/2 text-slate-500 dark:text-slate-300" aria-hidden="true" />
        <span
          aria-hidden="true"
          className={`absolute left-1 top-1 h-3 w-3 rounded-full bg-purple-700 shadow transition-transform duration-200 dark:bg-white ${
            isDark ? "translate-y-6" : "translate-y-0"
          }`}
        />
      </button>
    </div>
  );
}
