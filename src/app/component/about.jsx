import React from "react";
import Image from "next/image";
import AnimatedButton from "./button";
import { FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <section
      className="relative py-[15px] dark:bg-slate-800"
      id="about"
    >
      <div className="container mx-auto">
        <div
          className="relative grid grid-cols-1 items-center gap-10 rounded-[40px] bg-center bg-cover bg-[url('/images/about_bg1.jpg')] p-5 shadow-sm dark:bg-none dark:bg-slate-700 wow animate__animated animate__fadeInUp md:p-8 lg:grid-cols-12 lg:p-15"
          data-wow-delay=".90s "
        >
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-[500px]">
              <Image
                src={"/images/websites/tech.png"}
                className="rounded-lg shadow-lg relative "
                alt="Sachin Jadhav working on UI/UX design"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>
          </div>
          {/* end col */}

          <div className="order-1 text-center lg:order-2 lg:col-span-7 lg:text-left">
            <div className="lg:ms-7">
              <h6 className="text-cyan-600 text-base font-medium mb-2 ">
                <span className="inline-block w-[20px] h-[1.5px] bg-cyan-600 transform translate-y-[-5px] mr-2.5"></span>{" "}
                About Me
              </h6>
              <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                Designing with Purpose, Developing with Passion
              </h3>

              <p className="text-gray-600 max-w-2xl text-lg dark:text-gray-400">
                I am a Senior UI/UX Designer and Frontend Developer with over
                15 years of experience designing and developing user-friendly,
                scalable web applications. My background spans UI/UX design,
                frontend development, and platform implementation.
              </p>

              <h6 className=" text-lg font-medium mt-4 text-gray-800 dark:text-gray-200">
                I have worked extensively on B2B SaaS products, dashboards,
                and workflow-driven enterprise systems, handling everything
                from user flows and high-fidelity UI design in Figma to
                frontend implementation.
              </h6>

              <div className="relative mt-10"></div>

              <AnimatedButton
                href="/about"
                label="Learn More About Me"
                icon={<FiArrowRight className="inline ms-2 text-xl" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
