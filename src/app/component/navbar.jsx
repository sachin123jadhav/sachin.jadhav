"use client";
import React, { useEffect, useState } from "react";
import { Link as Link2, scrollSpy } from "react-scroll";
import Link from "next/link";

import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import AnimatedButton from "./button";


export default function Navbar({ navdark }) {
  const [isOpen, setMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
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
    if (!navbar) return; // ✅ Prevent error

    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add(
        "is-sticky",
        "wow",
        "animate__animated",
        "animate__fadeInUp"
      );
    } else {
      navbar.classList.remove(
        "is-sticky",
        "wow",
        "animate__animated",
        "animate__fadeInUp"
      );
    }
  }

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container flex flex-wrap items-center justify-between">
          {navdark && (
            <Link className="navbar-brand max-w-[150px]" href="/">
              <span>
                <img
                  src="/images/SachinJadhav.svg"
                  className="inline-block dark:hidden"
                  alt=""
                />
                <img
                  src="/images/SachinJadhav.svg"
                  className="hidden dark:inline-block"
                  alt=""
                />
              </span>
            </Link>
          )}
          {!navdark && (
            <Link className="navbar-brand max-w-[250px]" href="/">
              <span className="inline-block dark:hidden">
                <img
                  src="/images/SachinJadhav.svg"
                  className="l-dark"
                  alt=""
                />
                <img
                  src="/images/SachinJadhav.svg"
                  className="l-light"
                  alt=""
                />
              </span>
              <img
                src="/images/SachinJadhav.svg"
                className="hidden dark:inline-block"
                alt=""
              />
            </Link>
          )}
          <button
            type="button"
            className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu mdi-24px"></i>
          </button>
          <div
            className={`${
              isOpen === true ? "hidden" : "block"
            } navigation lg_992:order-1 lg_992:flex`}
            id="menu-collapse"
          >
            <ul
              className={`navbar-nav lg:gap-8 py-1 items-center ${
                navdark ? "" : "nav-light"
              }`}
              id="navbar-navlist"
            >
              <Link2
                className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-[linear-gradient(260deg,_rgb(42,_20,_84)_0%,_rgb(135,_80,_247)_100%)]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                to="home"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Home</span>
              </Link2>
              <Link2
                className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-[linear-gradient(260deg,_rgb(42,_20,_84)_0%,_rgb(135,_80,_247)_100%)]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
                to="about"
              >
                <span className="nav-link">About Me</span>
              </Link2>
              <Link2
                className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-[linear-gradient(260deg,_rgb(42,_20,_84)_0%,_rgb(135,_80,_247)_100%)]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                to="Experience"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Experience</span>
              </Link2>
              <Link2
                className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-[linear-gradient(260deg,_rgb(42,_20,_84)_0%,_rgb(135,_80,_247)_100%)]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                to="projects"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Portfolio</span>
              </Link2>
              <Link2
                className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-[linear-gradient(260deg,_rgb(42,_20,_84)_0%,_rgb(135,_80,_247)_100%)]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                to="skills"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Skills</span>
              </Link2>
             
             
              <Link2
                className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-[linear-gradient(260deg,_rgb(42,_20,_84)_0%,_rgb(135,_80,_247)_100%)]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                to="contact"
                activeclassname="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className="nav-link">Contact</span>
              </Link2>
          
             
              <AnimatedButton target="_new" href="/images/SachinJadhavWebDeveloper.pdf" label="Download CV" icon={<FiDownload className="inline ms-2 text-xl" />} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
