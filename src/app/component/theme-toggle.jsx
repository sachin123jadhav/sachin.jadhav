"use client";

import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../providers/ThemeProvider";

/**
 * Light / dark mode switch. Lives in the navbar, so it never sits on top of
 * page content.
 *
 * The visuals key off the `dark` class on <html> (set before first paint by the
 * inline script in layout.js), not off React state, so the knob is already in
 * the right place on load instead of sliding there after hydration.
 */
export default function ThemeToggle() {
  const { isDark, toggleMode } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleMode}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={isDark ? "Turn light mode on" : "Turn dark mode on"}
      className="relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-slate-300 bg-white shadow-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:border-slate-600 dark:bg-purple-700"
    >
      {/* The knob covers the inactive icon, so the visible one names the mode.
          Off (light): knob left, sun showing. On (dark): knob right, moon showing. */}
      <FiMoon className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white" aria-hidden="true" />
      <FiSun className="absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-amber-700" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-0 rounded-full bg-purple-700 shadow transition-transform duration-200 dark:translate-x-6 dark:bg-white"
      />
    </button>
  );
}
