"use client";
import React, { useEffect, useState } from "react";
import { Link as Link2, scrollSpy } from "react-scroll";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import AnimatedButton from "./button";


export default function Navbar({ navdark }) {
  const [isOpen, setMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    if (window.scrollY >= 50) {
      navbar.classList.add(
        "is-sticky",
        "wow",
        "animate__animated",
        "animate__fadeInUp",
        "p-0"
      );
    } else {
      navbar.classList.remove(
        "is-sticky",
        "wow",
        "animate__animated",
        "animate__fadeInUp",
        "p-0"
      );
    }
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="container flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link className="navbar-brand max-w-[200px]" href="/">
          <img src="/images/SachinJadhav.svg" alt="Sachin Jadhav" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
          onClick={toggleMenu}
        >
          <span className="sr-only">Navigation Menu</span>
          <i className="mdi mdi-menu mdi-24px"></i>
        </button>

        {/* Menu */}
        <div
          className={`${isOpen ? "hidden" : "block"} navigation lg_992:flex`}
        >
          <ul className="navbar-nav lg:gap-8 py-1 items-center">
            {/* HOME */}
            <Link2
              activeClass="active"
              spy
              hashSpy
              smooth
              duration={500}
              offset={-10}
              className="nav-item relative inline-block"
              href=""
            >
              <span className="nav-link">Home</span>
            </Link2>

            {/* ABOUT */}
            <Link className="navbar-brand" href="about">
              About Me
            </Link>
            <Link2
              to="about"
              activeClass="active"
              spy
              hashSpy
              smooth
              duration={500}
              offset={-10}
              className="nav-item relative inline-block"
            >
              <span className="nav-link">About Me</span>
            </Link2>

            {/* EXPERIENCE */}
            <Link2
              to="Experience"
              activeClass="active"
              spy
              hashSpy
              smooth
              duration={500}
              offset={-10}
              className="nav-item relative inline-block"
            >
              <span className="nav-link">Experience</span>
            </Link2>

            {/* PORTFOLIO */}
            <Link2
              to="projects"
              activeClass="active"
              spy
              hashSpy
              smooth
              duration={500}
              offset={-10}
              className="nav-item relative inline-block"
            >
              <span className="nav-link">Portfolio</span>
            </Link2>

            {/* SKILLS */}
            <Link2
              to="skills"
              activeClass="active"
              spy
              hashSpy
              smooth
              duration={500}
              offset={-10}
              className="nav-item relative inline-block"
            >
              <span className="nav-link">Skills</span>
            </Link2>

            {/* CONTACT */}
            <Link2
              to="contact"
              activeClass="active"
              spy
              hashSpy
              smooth
              duration={500}
              className="nav-item relative inline-block"
            >
              <span className="nav-link">Contact</span>
            </Link2>

            {/* DOWNLOAD CV */}
            <AnimatedButton
              target="_blank"
              href="/images/SachinJadhavWebDeveloper.pdf"
              label="Download CV"
              icon={<FiDownload className="inline ms-2 text-xl" />}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
