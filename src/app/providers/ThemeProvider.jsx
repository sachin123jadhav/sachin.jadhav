"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "theme";

/** The two modes the toggle offers. */
export const THEME_MODES = ["light", "dark"];

/** Falls back to the site's original light theme when nothing is saved. */
export const DEFAULT_MODE = "light";

const ThemeContext = createContext(null);

const isMode = (value) => THEME_MODES.includes(value);

/**
 * Puts a mode into effect on <html> and reports whether dark is showing.
 *
 * The inline script in layout.js does the same thing before first paint — it has
 * to be duplicated there because it cannot import this module. Keep the two in
 * step if the logic ever changes.
 */
export function applyTheme(mode) {
  if (typeof document === "undefined") return false;

  const dark = mode === "dark";
  const root = document.documentElement;

  // The class is what Tailwind's dark: variant keys off.
  root.classList.toggle("dark", dark);
  // Records the chosen mode, so CSS and devtools can read it directly.
  root.dataset.theme = mode;
  // Lets the browser theme native widgets and scrollbars to match.
  root.style.colorScheme = dark ? "dark" : "light";

  return dark;
}

function readStoredMode() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    // Anything unrecognised falls back to light — including the legacy "system"
    // value saved by an earlier version of this site.
    return isMode(stored) ? stored : DEFAULT_MODE;
  } catch {
    // Storage blocked (private browsing, hardened settings).
    return DEFAULT_MODE;
  }
}

export function ThemeProvider({ children }) {
  // Server and first client render must agree, so start from the default and
  // reconcile after mount. The inline script has already set the class, so the
  // page never flashes — only this state catches up.
  const [mode, setModeState] = useState(DEFAULT_MODE);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = readStoredMode();
    setModeState(stored);
    setIsDark(applyTheme(stored));
  }, []);

  // Keep other tabs of the site in step.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== STORAGE_KEY) return;
      const next = isMode(event.newValue) ? event.newValue : DEFAULT_MODE;
      setModeState(next);
      setIsDark(applyTheme(next));
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setMode = useCallback((next) => {
    if (!isMode(next)) return;

    setModeState(next);
    setIsDark(applyTheme(next));

    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Not fatal: the mode still applies for this visit, it just will not be
      // remembered.
    }
  }, []);

  /** Flips straight between the two modes, for the single-button toggle. */
  const toggleMode = useCallback(() => {
    setMode(isDark ? "light" : "dark");
  }, [isDark, setMode]);

  const value = useMemo(
    () => ({ mode, isDark, setMode, toggleMode }),
    [mode, isDark, setMode, toggleMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }

  return context;
}
