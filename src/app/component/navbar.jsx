'use client'
import React, { useEffect, useState } from "react";
import {  Link as Link2, scrollSpy } from "react-scroll";
import Link from "next/link";

import { FaGithub,FaTwitter,FaInstagram  } from "react-icons/fa";



export default function Navbar({navdark}){
  const [isOpen, setMenu] = useState(true);
  
  useEffect(()=>{
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    scrollSpy.update();
    return()=>{
      window.removeEventListener( 'scroll', windowScroll )
    }

  },[])

  const toggleMenu = () => {
    setMenu(!isOpen)
  }

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
              <Link className="navbar-brand" href="/">
                <span>
                  <img
                    src="/images/logo-dark.png"
                    className="inline-block dark:hidden"
                    alt=""
                  />
                  <img
                    src="/images/logo-light.png"
                    className="hidden dark:inline-block"
                    alt=""
                  />
                </span>
              </Link>
            )}
            {!navdark && (
              <Link className="navbar-brand" href="/">
                <span className="inline-block dark:hidden">
                  <img src="/images/logo-dark.png" className="l-dark" alt="" />
                  <img
                    src="/images/logo-light.png"
                    className="l-light"
                    alt=""
                  />
                </span>
                <img
                  src="/images/logo-light.png"
                  className="hidden dark:inline-block"
                  alt=""
                />
              </Link>
            )}

            <div
              className={`${
                isOpen === true ? "hidden" : "block"
              } navigation lg_992:order-1 lg_992:flex`}
              id="menu-collapse"
            >
              <ul
                className={`navbar-nav ${navdark ? "" : "nav-light"}`}
                id="navbar-navlist"
              >
                <Link2
                  className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-gradient-to-r after:from-[#f54900] after:to-[#f54900]
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
         after:bg-gradient-to-r after:from-[#f54900] after:to-[#f54900]
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
                  <span className="nav-link">About us</span>
                </Link2>
                <Link2
                  className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-gradient-to-r after:from-[#f54900] after:to-[#f54900]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                  to="features"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="nav-link">Services</span>
                </Link2>
                <Link2
                  className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-gradient-to-r after:from-[#f54900] after:to-[#f54900]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                  to="portfolio"
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
         after:bg-gradient-to-r after:from-[#f54900] after:to-[#f54900]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                  to="testi"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="nav-link">Review</span>
                </Link2>
                <Link2
                  className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-gradient-to-r after:from-[#f54900] after:to-[#f54900]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                  to="pricing"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="nav-link">Pricing</span>
                </Link2>
                <Link2
                  className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-gradient-to-r after:from-[#f54900] after:to-[#f54900]
         after:bottom-[0px] after:left-0
         after:origin-right after:scale-x-0
         after:transition-transform after:duration-300 after:ease-in-out
         hover:after:scale-x-100 hover:after:origin-left"
                  to="blog"
                  activeclassname="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="nav-link">Blog</span>
                </Link2>
                <Link2
                  className="nav-item relative inline-block after:content-[''] after:absolute 
         after:w-full after:h-[2px] after:rounded-md
         after:bg-gradient-to-r after:from-[#f54900] after:to-[#f54900]
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
                  <span className="nav-link">Contact us</span>
                </Link2>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}   