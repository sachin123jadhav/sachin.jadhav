"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from "react";
import Link from "next/link";

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

function Index_three() {
  const [videoModal, setModal] = useState(false);

  const images = [
    '/images/bg/01.png','/images/bg/02.png','/images/bg/03.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length 
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
          <Navbar navdark={true}/>
          <section className="py-36 md:py-64 w-full table relative bg-orange-600/5 dark:bg-orange-600/10" id="home" style={{backgroundImage:`url(${images[currentImageIndex]})`}}>
            <div className="container relative">
                <div className="grid grid-cols-1 mt-12">
                    <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">Business Growth <br/> Makes Your Company</h4>
                
                    <p className="text-slate-400 dark:text-white/70 mb-0 max-w-2xl !text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                
                    <div className="relative mt-10">
                        <Link href="" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full me-1">Get Started</Link>
                        <Link href="#!" scroll={false} onClick={()=>setModal(!videoModal)} className="btn btn-icon btn-lg bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-full lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link><small className="font-medium text-sm uppercase align-middle ms-2 dark:text-white/70">Watch Now</small>
                    </div>
                </div>
            </div>
        </section>
          
              {videoModal && 
                <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-1 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow-xs dark:bg-gray-700">
                            <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                <button type="button" onClick={()=>setModal(!videoModal)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
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
