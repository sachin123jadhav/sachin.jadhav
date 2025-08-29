"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

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
import Link from 'next/link';

function Home() {
    const images = [
        '/images/bg/1.jpg','/images/bg/2.jpg','/images/bg/3.jpg'
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
          <Navbar/>
          <section style={{backgroundImage:`url(${images[currentImageIndex]})`}} className="py-36 lg:py-64 w-full table relative bg-center bg-cover" id="home" >
            <div className="absolute inset-0 bg-slate-900/80"></div>
            <div className="container relative">
              <div className="grid grid-cols-1 mt-12">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">  Providing Brilliant Ideas <br /> For Your 
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Business',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Startups',
                      1000,
                      'Digital Agency',
                      1000,
                      'Marketing',
                      1000
                    ]}
                    wrapper="span"
                    speed={10}
                    repeat={Infinity}
                    className="typewrite relative text-type-element ms-2"
                    cursor={false}
                  />
                </h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl !text-lg"> Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                <div className="relative mt-10">
                  <Link href="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">
                    Get Started
                  </Link>
                </div>
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

export default Home;
