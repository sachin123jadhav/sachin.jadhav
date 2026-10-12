"use client";

import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../providers/ThemeProvider";

/**
 * Light / dark theme button.
 *
 * A single click switches themes — there is no menu and no third mode. The icon
 * shows the mode you would switch *to*, and the accessible name spells that out,
 * so the state is never conveyed by the icon alone.
 *
 * Icons come from react-icons, which the project already depends on.
 */
export default function ThemeToggle() {
  const { isDark, toggleMode } = useTheme();

  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  const Icon = isDark ? FiSun : FiMoon;

  return (
    <div className="inline-block mt-3 lg:mt-0 lg:ms-3">
      <button
        type="button"
        onClick={toggleMode}
        aria-label={label}
        title={label}
        className="inline-flex items-center justify-center w-9 h-9 rounded-md cursor-pointer
                   text-slate-700 dark:text-slate-200
                   hover:bg-slate-100 dark:hover:bg-slate-700
                   transition-colors duration-200"
      >
        <Icon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
}
