import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { TypeAnimation } from "react-type-animation";
import heroSachin from "../../../public/images/Sachin-jadhav.jpg";
import AnimatedButton from './button';
import figma from "../../../public/images/svg/figma.svg";
import html from "../../../public/images/svg/html-5.svg";
import css from "../../../public/images/svg/css-3.svg";

function TopSlider() {
  return (
    <>
      <section
        className="py-36 lg:py-12 w-full table relative bg-center bg-cover bg-blue-50 dark:bg-slate-800  dark:bg-none bg-[url('/images/hero-bg.jpg')] overflow-hidden"
        id="home"
      >
        <div className="container relative  overflow-x-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center ">
            <div
              className="lg:col-span-6 wow animate__animated animate__fadeInLeft"
              data-wow-delay=".90s "
            >
              <h4 className="text-black lg:text-4xl text-3xl lg:leading-normal leading-normal font-medium mb-2 position-relative text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                {" "}
                Hi, I'm Senior
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "UI/UX Designer",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Frontend Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                  className="typewrite relative text-type-element ms-2  bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent"
                  cursor={false}
                />
                <br></br>
                with 15+ Years of Experience
              </h4>
              <h2 className="text-xl font-medium py-2">
                B2B SaaS • Dashboards • Enterprise Platforms • Web Applications
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                Senior UI/UX Designer and Frontend Developer with 15+ years of
                experience designing and building B2B SaaS platforms,
                dashboards, data-heavy interfaces, and enterprise web
                applications. Strong expertise in Figma, UI systems, and
                frontend technologies including HTML, CSS, JavaScript, and
                React.
              </p>
              <AnimatedButton
                target="_new"
                href="/images/SachinJadhavWebDeveloper.pdf"
                label="View Case Studies"
                icon={<FiArrowRight className="inline ms-2 text-xl" />}
                className=" bg-gradient-to-br from-[#7047c3] to-[#7047c3] mr-8"
              />

              <AnimatedButton
                target="_new"
                href="/images/SachinJadhavWebDeveloper.pdf"
                label="Download CV"
                icon={<FiDownload className="inline ms-2 text-xl" />}
              />
            </div>

            <div
              className="lg:col-span-6 wow animate__animated animate__fadeInRight relative"
              data-wow-delay="1.1s"
            >
              <div className="absolute top-8 translate-x-[140px] group">
                {/* Icon */}
                <Image
                  src={html}
                  alt="HTML"
                  className="w-[50px] cursor-pointer transition-transform duration-300 group-hover:scale-110"
                />

                {/* Sliding Text */}
                <span
                  className="
      absolute left-full top-1/2 -translate-y-1/2
      ml-3
      whitespace-nowrap
      rounded-md bg-black/80 px-3 py-1 text-sm text-white
      opacity-0
      -translate-x-3
      transition-all duration-300 ease-out
      group-hover:opacity-100
      group-hover:translate-x-0
      pointer-events-none
    "
                >
                  HTML5
                </span>
              </div>

              <Image
                src={css}
                alt="CSS"
                className="w-[50px] absolute top-[90px] translate-x-[80px]"
              />
              <Image
                src={figma}
                alt="figma"
                className="w-[70px] absolute top-[160px] translate-x-[40px]"
              />

              <Image
                src={heroSachin}
                alt="Sachin Jadhav"
                className=" mx-auto w-full max-w-[400px] mt-10 rounded-tl-[50%] rounded-br-[50%] shadow-lg animate-[color-change_6s_linear_infinite]

      border-l-[5px] border-l-red-300
      border-r-[8px] border-r-orange-500
      animate-borderColorAnimation "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopSlider