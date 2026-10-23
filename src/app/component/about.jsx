import React from "react";
import Image from "next/image";
import AnimatedButton from "./button";
import { FiArrowRight } from "react-icons/fi";

export default function About() {
  return (
    <section
      className="section relative dark:bg-slate-800"
      id="about"
    >
      <div className="container mx-auto">
        <div
          className="relative grid grid-cols-1 items-center gap-10 rounded-[40px] bg-center bg-cover bg-[url('/images/about_bg1.jpg')] p-5 shadow-sm dark:bg-none dark:bg-slate-700 md:p-8 lg:grid-cols-12 lg:p-15"
        >
          <div className="order-2 lg:order-1 lg:col-span-5" data-reveal="left">
            <div className="relative mx-auto max-w-[500px] transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]">
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
            <div className="lg:ms-7" data-reveal="right">
              <p className="text-cyan-600 text-base font-medium mb-2">
                <span className="inline-block w-[20px] h-[1.5px] bg-cyan-600 transform translate-y-[-5px] mr-2.5"></span>{" "}
                About Me
              </p>
              <h2 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                Designing with Purpose, Developing with Passion
              </h2>

              <p className="text-gray-600 max-w-2xl text-lg dark:text-gray-400">
                I am a Senior UI/UX Designer and Frontend Developer with over
                16 years of experience designing and developing user-friendly,
                scalable web applications. My background spans UI/UX design,
                frontend development, and platform implementation.
              </p>

              <p className="text-lg font-medium mt-4 text-gray-800 dark:text-gray-200">
                I have worked extensively on B2B SaaS products, dashboards,
                and workflow-driven enterprise systems, handling everything
                from user flows and high-fidelity UI design in Figma to
                frontend implementation.
              </p>


              <AnimatedButton
                className="mt-8"
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
