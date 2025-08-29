"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Image from "next/image";

import Services from "../component/services";
import About from "../component/about";
import Pricing from "../component/pricing";
import Blog from "../component/blog";
import Contact from "../component/contact";
import Footer from "../component/footer";
import Portfolio from "../component/portfolio";
import Review from "../component/testimonial";
import Switcher from "../component/switcher";
import Navbar from "../component/navbar";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

function Index_three() {
  const [isOpens, setOpen] = useState(false)
  return (
    <>
          <Navbar navdark={true}/>
          <section
            style={{ backgroundImage: `url(/images/bg/bg4.png)` }}
            className="py-36 md:h-screen h-auto items-center flex relative bg-bottom bg-cover active"
            id="home"
          >
            <div className="absolute inset-0  bg-gradient-to-b from-orange-600/20 dark:from-orange-600/40 via-orange-600/10 dark:via-orange-600/20 to-transparent"></div>
            <div className="container relative">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                  <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">
                    Give your users <br /> privacy choices.
                  </h4>

                  <p className="text-slate-400 dark:text-white/70 mb-0 max-w-2xl !text-lg">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered Tailwind CSS html
                    page.
                  </p>

                  <div className="subcribe-form mt-10">
                    <form className="relative">
                      <input
                        type="email"
                        id="subemail"
                        name="email"
                        className="rounded-full bg-white opacity-70 border border-gray-200"
                        placeholder="E-mail :"
                      />
                      <button
                        type="submit"
                        className="btn !inline-flex items-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full"
                      >
                        Submit <FiArrowRight className="ms-1"/>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="lg:col-span-5 md:col-span-6">
                  <div className="relative">
                    <div className="relative flex justify-end">
                      <Image
                        src="/images/ab01.jpg"
                        width={400}
                        height={300}
                        className="lg:w-[400px] w-[280px] rounded-xl shadow-smdark:shadow-gray-700"
                        alt=""
                      />
                      <div className="absolute top-0 translate-y-2/4 start-0 text-center">
                        <Link
                          href="#"
                          onClick={()=>setOpen(!isOpens)}
                          data-type="youtube"
                          data-id="S_CGed6E610"
                          className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600 cursor-pointer"
                        >
                          <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="absolute md:-start-5 start-0 -bottom-16">
                      <Image
                        src="/images/ab02.jpg"
                        width={400}
                        height={300}
                        alt=""
                        className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                {isOpens && 
                <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-1 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow-xs dark:bg-gray-700">
                            <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <button type="button" onClick={()=>setOpen(!isOpens)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-1 md:p-1 space-y-4">
                                <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            }
              </div>
            </div>
          </section>
          <About />

          <Services />

          <Portfolio />

          <Review />

          <Pricing />

          <Blog />

          <Contact />

          <Footer />

          <Switcher />
    </>
  );
}

export default Index_three;
