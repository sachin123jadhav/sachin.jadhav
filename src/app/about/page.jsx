import React from "react";


import About from "./about-me"
import BreadCrumb from "../component/breadcrumb";
import { OG_BASE } from "../site-url";

export const metadata = {
  title: "About Me",
  alternates: { canonical: "/about" },
  description:
    "Senior UI/UX Designer and Frontend Developer with 16+ years of experience designing scalable B2B SaaS products, dashboards, and enterprise web applications.",
  openGraph: {
    ...OG_BASE,
    title: "About Me | Sachin Jadhav",
    description:
      "Senior UI/UX Designer and Frontend Developer with 16+ years of experience designing scalable B2B SaaS products, dashboards, and enterprise web applications.",
    url: "/about",
  },
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
