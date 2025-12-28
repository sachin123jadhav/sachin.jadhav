'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "./button";
import { FiArrowRight } from "react-icons/fi";


export default function About() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <section
        className="relative md:py-[50px] py-16  dark:bg-slate-800"
        id="about"
      >
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center wow animate__animated animate__fadeInUp relative bg-center bg-cover dark:bg-none dark:bg-slate-900 bg-[url('/images/about_bg1.jpg')]  p-15 rounded-[40px] shadow-sm"
            data-wow-delay=".90s "
          >
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={"/images/websites/tech.png"}
                  className="rounded-lg shadow-lg relative "
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy" // optional
                />
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
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
                  href="#"
                  label="Learn More About Me"
                  icon={<FiArrowRight className="inline ms-2 text-xl" />}
                />
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
      {isOpen && (
        <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-1 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-xs dark:bg-gray-700">
              <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpen(!isOpen)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-1 md:p-1 space-y-4">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
