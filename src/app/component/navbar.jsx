"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload } from "react-icons/fi";
import AnimatedButton from "./button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const hasAnimated = useRef(false);
  const pathname = usePathname();

  // Sticky navbar animation
  const handleScroll = useCallback(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    if (window.scrollY >= 50) {
      navbar.classList.add("is-sticky", "p-0");

      if (!hasAnimated.current) {
        navbar.classList.add("animate__animated", "animate__fadeInDown");
        hasAnimated.current = true;
      }
    } else {
      navbar.classList.remove("is-sticky", "p-0");
      hasAnimated.current = false;
      navbar.classList.remove("animate__animated", "animate__fadeInDown");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="container flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="navbar-brand max-w-[200px]" onClick={closeMenu}>
          <img src="/images/SachinJadhav.svg" alt="Sachin Jadhav" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="mdi mdi-menu mdi-24px"></i>
        </button>

        {/* Menu */}
        <div className={`${isOpen ? "block" : "hidden"} navigation lg_992:flex`}>
          <ul className="navbar-nav lg:gap-8 py-1 items-center">
            <Link href="/" className={`nav-item ${isActive("/") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Home</span>
            </Link>

            <Link href="/about" className={`nav-item ${isActive("/about") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">About Me</span>
            </Link>

            <Link href="/experience" className={`nav-item ${isActive("/experience") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Experience</span>
            </Link>

            <Link href="/projects" className={`nav-item ${isActive("/projects") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Portfolio</span>
            </Link>

            <Link href="/skills" className={`nav-item ${isActive("/skills") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Skills</span>
            </Link>

            <Link href="/contact" className={`nav-item ${isActive("/contact") ? "active" : ""}`} onClick={closeMenu}>
              <span className="nav-link">Contact</span>
            </Link>

            <AnimatedButton
              target="_blank"
              href="/images/SachinJadhavWebDeveloper.pdf"
              label="Download CV"
              icon={<FiDownload className="inline ms-2 text-xl" />}
              className="ml-2"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
