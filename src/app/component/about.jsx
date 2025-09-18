'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "./button";
import { FiDownload } from "react-icons/fi";

export default function About() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <section
        className="relative md:py-3 py-16  dark:bg-slate-800"
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
                  src={"/images/about.jpg"}
                  className="rounded-lg shadow-lg relative "
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy" // optional
                />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link
                    href="#"
                    scroll={false}
                    onClick={() => setOpen(!isOpen)}
                    className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600 cursor-pointer"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium mb-2 ">
                  <span className="inline-block w-[20px] h-[1.5px] bg-orange-600 transform translate-y-[-5px] mr-2.5"></span>{" "}
                  About Me
                </h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                  Designing with Purpose, Developing with Passion
                </h3>

                <p className="text-gray-600 max-w-2xl text-lg dark:text-gray-400">
                  I'm a passionate UI/UX Developer with a strong eye for detail
                  and a deep love for creating seamless digital experiences. My
                  expertise spans a diverse range of technologies, including
                  HTML, CSS, JavaScript, React, and SASS, as well as platforms
                  like WordPress, Shopify, Ghost, and OpenCart. With a solid
                  background in both design and development, I bridge the gap
                  between aesthetics and functionality. I’m highly proficient
                  with tools like Photoshop and Figma, and I thrive on
                  transforming concepts into fully responsive, user-centered
                  designs.
                </p>

                <h6 className=" text-lg font-medium mt-4 text-gray-800 dark:text-gray-200">
                  Driven by innovation and always tuned into emerging trends,
                  I’m committed to delivering modern web solutions that are not
                  just visually appealing, but also purposeful and
                  user-friendly.
                </h6>

                <div className="relative mt-10"></div>

                <AnimatedButton href="#" label="View Portfolio" />
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
