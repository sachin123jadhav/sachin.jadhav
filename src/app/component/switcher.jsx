"use client";

import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Link from "next/link";

/**
 * Floating back-to-top control.
 */
export default function Switcher() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setShowBackToTop(document.documentElement.scrollTop > 300);

    onScroll(); // reflect the position on load, not just after the first scroll
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Link
        href="#"
        onClick={scrollToTop}
        id="back-to-top"
        aria-label="Back to top"
        className="back-to-top fixed items-center justify-center text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-gradient-to-br from-[#0fb3d3] to-[#7047c3] text-white leading-9 shadow-lg"
        style={{ display: showBackToTop ? "inline-flex" : "none" }}
      >
        <FiArrowUp className="" />
      </Link>
    </>
  );
}
