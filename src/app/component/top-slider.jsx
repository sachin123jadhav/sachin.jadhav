import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FiDownload } from 'react-icons/fi';
import { TypeAnimation } from "react-type-animation";
import heroSachin from "../../../public/images/Sachin-jadhav.jpg";
import AnimatedButton from './button';

function TopSlider() {
  return (
    <>
      <section
        className="py-36 lg:py-12 w-full table relative bg-center bg-cover bg-blue-50 dark:bg-slate-800  dark:bg-none bg-[url('/images/hero-bg.jpg')]"
        id="home"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center ">
            <div
              className="lg:col-span-6 wow animate__animated animate__fadeInLeft"
              data-wow-delay=".90s "
            >
              <h4 className="text-black lg:text-4xl text-3xl lg:leading-normal leading-normal font-medium mb-2 position-relative text-4xl font-bold bg-gradient-to-r from-[var(--color-orange-800)] to-[var(--color-orange-400)] bg-clip-text text-transparent">
                {" "}
                Hi, I'm a Web
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Designer",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                  className="typewrite relative text-type-element ms-2  bg-gradient-to-r from-[var(--color-orange-800)] to-[var(--color-orange-400)] bg-clip-text text-transparent"
                  cursor={false}
                />
                <br></br>
                with 15+ Years of Experience
              </h4>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                I craft dynamic, visually engaging, and user-friendly websites
                using technologies like HTML, CSS, JavaScript, React, and SASS.
                With deep experience in platforms like WordPress, Shopify,
                Ghost, and OpenCart — plus design tools like Photoshop and Figma
                — I transform concepts into responsive, functional web
                experiences that stay ahead of industry trends.
              </p>

              <AnimatedButton
                target="_new"
                href="/images/SachinJadhavWebDesigner.pdf"
                label="Download CV"
                icon={<FiDownload className="inline ms-2 text-xl" />}
              />
            </div>

            <div
              className="lg:col-span-6 wow animate__animated animate__fadeInRight"
              data-wow-delay="1.1s"
            >
              <Image
                src={heroSachin}
                alt="Sachin Jadhav"
                className=" mx-auto w-full max-w-[460px] mt-10 rounded-tl-[50%] rounded-br-[50%] shadow-lg

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