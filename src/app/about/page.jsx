import React from "react";


import About from "./about-me"
import BreadCrumb from "../component/breadcrumb";

export const metadata = {
  title: "About Me",
  description:
    "Senior UI/UX Designer and Frontend Developer with 15+ years of experience designing scalable B2B SaaS products, dashboards, and enterprise web applications.",
};

function AboutMe() {
  return <>

<BreadCrumb
  title="About Me"
  description="A Senior UI/UX Designer and Frontend Developer with a passion for creating beautiful, functional, and user-centric digital experiences."
/>


<About/>


 </>;
}

export default AboutMe;
