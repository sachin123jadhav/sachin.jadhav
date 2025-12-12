"use client";

import React, { useEffect, useState } from "react";

import About from "./component/about";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Switcher from "./component/switcher";
import Navbar from "./component/navbar";
import TopSlider from "./component/top-slider";
import Experience from "./component/experience";
import Projects from "./component/projects";
import MySkills from "./component/my-skills";
import CreativeLoader from "./component/creative-loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let minTimer;
    const MIN_MS = 350;

    function finishLoading() {
      clearTimeout(minTimer);
      minTimer = setTimeout(() => setLoading(false), 70);
    }

    function onWindowLoad() {
      setTimeout(() => finishLoading(), MIN_MS);
    }

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        onWindowLoad();
      } else {
        window.addEventListener("load", onWindowLoad);
      }
    } else {
      setTimeout(() => setLoading(false), MIN_MS + 50);
    }

    return () => {
      clearTimeout(minTimer);
      if (typeof window !== "undefined") {
        window.removeEventListener("load", onWindowLoad);
      }
    };
  }, []);

  return (
    <>
      <div aria-hidden={loading} className={` ${loading ? "pointer-events-none" : ""}`}  >
        <Navbar />
        <TopSlider />
        <About />
        <Experience />
        <Projects />
        <MySkills />
        <Contact />
        <Footer />
        <Switcher />
      </div>

      {/* Creative loader */}
      <CreativeLoader show={loading} />
    </>
  );
}
