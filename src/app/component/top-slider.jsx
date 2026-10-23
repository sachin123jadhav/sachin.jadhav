"use client";

import Image from 'next/image';
import React from 'react'
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { TypeAnimation } from "react-type-animation";
import heroSachin from "../../../public/images/Sachin-jadhav.jpg";
import AnimatedButton from './button';
import figma from "../../../public/images/svg/figma.svg";
import html from "../../../public/images/svg/html-5.svg";
import css from "../../../public/images/svg/css-3.svg";
import sass from "../../../public/images/svg/sass.svg";
import js from "../../../public/images/svg/js.svg";
import bootstrap from "../../../public/images/svg/bootstrap.svg";
import tailwind from "../../../public/images/svg/tailwindcss.svg";

/**
 * Floating tech badges, one descending sequence down the left of the portrait.
 *
 * Positions are measured from the portrait's own box (see the wrapper below),
 * NOT from the grid column. That matters: the portrait is centred with mx-auto,
 * so a column-relative offset would change its distance from the image as the
 * window resizes. Anchored to the box, the badges stay locked to the image.
 *
 * The portrait uses rounded-tl-[50%], so its top-left is a large ellipse and the
 * first three badges sit in the concave notch that curve carves out. Below that
 * curve the image edge is a straight vertical line, so the lower badges all
 * share the same left offset and form a clean column with an even 24px gap and a
 * 70px pitch.
 *
 *   left    - offset from the portrait's left edge (negative = outside it)
 *   top     - offset from the portrait's top edge
 *   size    - icon width
 *   side    - label slide direction; "left" would be needed for anything placed
 *             right of the image, so the label is not clipped
 *
 * Anything else in public/images/svg can be added in one line: React.svg,
 * photoshop.svg, ant-design.svg, wordpress.svg, coreldraw.svg.
 */
const techIcons = [
  // following the rounded top-left curve, positions unchanged from the original
  { src: html,  label: "HTML5",  left: "left-0",        top: "top-[32px]",  size: "w-[50px]", side: "right" },
  { src: css,   label: "CSS3",   left: "left-[-62px]",  top: "top-[90px]",  size: "w-[50px]", side: "right" },
  { src: figma, label: "Figma",  left: "left-[-102px]", top: "top-[160px]", size: "w-[70px]", side: "right" },

  // Straight column below Figma. Right edges line up with Figma's right edge,
  // so the gap to the image edge stays a constant 34px all the way down.
  { src: sass,      label: "SASS",         left: "left-[-80px]", top: "top-[254px]", size: "w-[46px]", side: "right" },
  { src: js,        label: "JavaScript",   left: "left-[-80px]", top: "top-[324px]", size: "w-[46px]", side: "right" },
  { src: bootstrap, label: "Bootstrap",    left: "left-[-80px]", top: "top-[394px]", size: "w-[46px]", side: "right" },
  { src: tailwind,  label: "Tailwind CSS", left: "left-[-80px]", top: "top-[464px]", size: "w-[46px]", side: "right" },
];

function TopSlider() {
  return (
    <>
      <section
        className="section section--band section--hero w-full table relative overflow-hidden bg-center bg-cover bg-blue-50 bg-[url('/images/hero-bg.jpg')] dark:bg-slate-800 dark:bg-none"
        id="home"
      >
        <div className="container relative  overflow-x-hidden">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div
              className="animate__animated animate__fadeInLeft md:max-lg:text-center lg:col-span-6"
            >
              <h1 className="gradient-shift mb-2 text-2xl font-bold leading-tight text-transparent bg-gradient-to-r from-purple-600 via-blue-700 to-purple-600 bg-clip-text md:text-3xl lg:text-[1.75rem] xl:text-4xl xl:leading-normal">
                {/* The typing effect spells words out a letter at a time, so screen
                    readers and search engines get this stable title instead. */}
                <span className="sr-only">
                  Hi, I&apos;m Sachin Jadhav, a Senior UI/UX Designer and Frontend
                  Developer with 16+ years of experience
                </span>
                <span className="block whitespace-nowrap" aria-hidden="true">Hi, I&apos;m Senior</span>
                <TypeAnimation
                  sequence={[
                    "UI/UX Designer",
                    2000, // hold each phrase for 2s
                    "Frontend Developer",
                    2000,
                  ]}
                  wrapper="span"
                  aria-hidden="true"
                  speed={20}
                  repeat={Infinity}
                  className="typewrite gradient-shift relative block h-[1.25em] whitespace-nowrap bg-gradient-to-r from-[#0fb3d3] via-purple-600 to-[#0fb3d3] bg-clip-text text-transparent"
                  cursor={false}
                />
                <span className="block whitespace-nowrap text-[clamp(1rem,6vw,1.5rem)] lg:text-[1.75rem] xl:text-4xl" aria-hidden="true">
                  with 16+ Years of Experience
                </span>
              </h1>
              <p className="py-2 text-lg font-medium xl:text-xl">
                B2B SaaS • Dashboards • Enterprise Platforms • Web Applications
              </p>
              <p className="mb-5 text-base leading-relaxed text-gray-700 dark:text-gray-300 xl:text-lg">
                Senior UI/UX Designer and Frontend Developer with 16+ years of
                experience designing and building B2B SaaS platforms,
                dashboards, data-heavy interfaces, and enterprise web
                applications. Strong expertise in Figma, UI systems, and
                frontend technologies including HTML, CSS, JavaScript, and
                React.
              </p>
              <div className="flex flex-wrap items-center gap-3 md:max-lg:justify-center lg_992:flex-nowrap lg_992:gap-2">
                <AnimatedButton
                  href="/portfolio"
                  label="View Case Studies"
                  icon={<FiArrowRight className="inline ms-2 text-xl" />}
                  className="bg-gradient-to-br from-[#7047c3] to-[#7047c3] lg_992:px-4 xl:px-[35px]"
                />

                <AnimatedButton
                  target="_blank"
                  href="/images/SachinJadhavWebDeveloper.pdf"
                  label="Download CV"
                  icon={<FiDownload className="inline ms-2 text-xl" />}
                  className="lg_992:px-4 xl:px-[35px]"
                />
              </div>
            </div>

            <div
              className="lg:col-span-6 animate__animated animate__fadeInRight relative"
            >
              {/* Portrait box: this is what the badges are positioned against. */}
              <div className="relative mx-auto w-full max-w-[400px] max-xl:max-w-[320px]">
                {/* Badges need the wide layout; below lg the portrait fills the
                    column and they would sit on top of it. */}
                <div className="hidden origin-top-left scale-75 lg:block xl:scale-100">
                  {techIcons.map(({ src, label, left, top, size, side }) => (
                    <div
                      key={label}
                      className={`absolute ${top} ${left} group`}
                    >
                      <Image
                        src={src}
                        alt={label}
                        className={`${size} cursor-pointer transition-transform duration-300 group-hover:scale-110`}
                      />

                      {/* Sliding label */}
                      <span
                        className={`
                          absolute top-1/2 -translate-y-1/2
                          whitespace-nowrap
                          rounded-md bg-black/80 px-3 py-1 text-sm text-white
                          opacity-0
                          transition-all duration-300 ease-out
                          group-hover:opacity-100
                          group-hover:translate-x-0
                          pointer-events-none
                          ${
                            side === "left"
                              ? "right-full mr-3 translate-x-3"
                              : "left-full ml-3 -translate-x-3"
                          }
                        `}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <Image
                  src={heroSachin}
                  priority
                  alt="Sachin Jadhav"
                  className="w-full rounded-tl-[50%] rounded-br-[50%] shadow-lg
      animate-[color-change_6s_linear_infinite]
      border-l-[5px] border-l-red-300
      border-r-[8px] border-r-orange-500 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopSlider
