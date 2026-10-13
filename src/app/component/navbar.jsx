"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload } from "react-icons/fi";
import AnimatedButton from "./button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const pathname = usePathname();

  // Keep the navbar fixed without leaving a transform on its fixed-position drawer.
  const handleScroll = useCallback(() => {
    if (isOpen) return;

    const navbar = navbarRef.current;
    if (!navbar) return;

    navbar.classList.remove("animate__animated", "animate__fadeInDown");

    if (window.scrollY >= 50) {
      navbar.classList.add("is-sticky", "p-0");
    } else {
      navbar.classList.remove("is-sticky", "p-0");
    }
  }, [isOpen]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isOpen) {
      handleScroll();
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
    };
  }, [isOpen, handleScroll]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="container flex flex-nowrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="navbar-brand max-w-[200px] max-xl:me-4 max-xl:max-w-[140px]" onClick={closeMenu}>
          <img src="/images/SachinJadhav.svg" alt="Sachin Jadhav" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="collapse-btn relative z-[1001] inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <i className={`mdi ${isOpen ? "mdi-close" : "mdi-menu"} mdi-24px`} aria-hidden="true"></i>
        </button>

        {/* Mobile backdrop */}
        {isOpen && (
          <button
            type="button"
            className="fixed inset-0 z-[998] bg-slate-950/40 lg_992:hidden"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />
        )}

        {/* Left-side mobile drawer; reset to the inline desktop navigation at 992px. */}
        <div
          id="primary-navigation"
          className={`navigation fixed inset-y-0 start-0 z-[999] w-[min(85vw,320px)] bg-white px-6 pt-24 shadow-2xl transition-transform duration-300 dark:bg-slate-800 lg_992:static lg_992:z-auto lg_992:w-auto lg_992:translate-x-0 lg_992:bg-transparent lg_992:p-0 lg_992:shadow-none ${
            isOpen
              ? "visible translate-x-0"
              : "invisible -translate-x-full lg_992:visible"
          }`}
        >
          <ul className="navbar-nav mt-0 flex h-full flex-col items-start gap-2 overflow-y-auto lg_992:h-auto lg_992:flex-row lg_992:items-center lg_992:gap-4 lg_992:overflow-visible xl:gap-8">
            <Link href="/" className={`nav-item w-full lg_992:w-auto ${isActive("/") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Home</span>
            </Link>

            <Link href="/about" className={`nav-item w-full lg_992:w-auto ${isActive("/about") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">About Me</span>
            </Link>

            <Link href="/experience" className={`nav-item w-full lg_992:w-auto ${isActive("/experience") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Experience</span>
            </Link>

            <Link href="/portfolio" className={`nav-item w-full lg_992:w-auto ${isActive("/portfolio") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Portfolio</span>
            </Link>

            <Link href="/skills" className={`nav-item w-full lg_992:w-auto ${isActive("/skills") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Skills</span>
            </Link>

            <Link href="/contact" className={`nav-item w-full lg_992:w-auto ${isActive("/contact") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Contact</span>
            </Link>

            <AnimatedButton
              target="_blank"
              href="/images/SachinJadhavWebDeveloper.pdf"
              label="Download CV"
              icon={<FiDownload className="inline ms-2 text-xl" />}
              className="ml-0 lg_992:ml-2"
            />
          </ul>

        </div>
      </div>
    </nav>
  );
}
