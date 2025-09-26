"use client"; // This is a client component 👈🏽

import { TypeAnimation } from 'react-type-animation';

import Services from "./component/services";
import About from "./component/about";
import Pricing from "./component/pricing";
import Blog from "./component/blog";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Portfolio from "./component/portfolio";
import Review from "./component/testimonial";
import Switcher from "./component/switcher";
import Navbar from "./component/navbar";
import Link from 'next/link';
import TopSlider from './component/top-slider';
import Experience from './component/experience';
import Projects from './component/projects';
import MySkills from './component/my-skills';

function Home() {
  return (
    <>
      <Navbar />
      <TopSlider />

      <About />
      <Experience />
      <Projects />
      <MySkills />
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
