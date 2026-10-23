"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Arms the scroll-reveal animations in assets/css/custom/_motion.css.
 *
 * Keeps `reveal-ready` on <html> (which is what hides `[data-reveal]` elements)
 * and marks each element `is-visible` as it scrolls into view. Nothing is armed
 * when the visitor prefers reduced motion or IntersectionObserver is missing,
 * so the content simply stays visible. Re-runs on every route change to pick up
 * the new page's elements.
 */
export default function RevealProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return undefined;

    // Usually already set by the inline script in layout.js; this tells that
    // script's safety timer the app is running and the class may stay.
    window.__revealArmed = true;
    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      // threshold 0 so even an element taller than the screen reveals.
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    document
      .querySelectorAll("[data-reveal]:not(.is-visible)")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return children;
}
