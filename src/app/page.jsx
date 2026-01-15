"use client";

import TopSlider from "./component/top-slider";
import Highlights from "./component/highlights";
import About from "./component/about";
import Contact from "./component/contact";

export default function Home() {
  return (
    <>
      <TopSlider />
      <Highlights />
      <About />
      <Contact />
    </>
  );
}
