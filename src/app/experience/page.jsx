import React from "react";
import BreadCrumb from "../component/breadcrumb";
import MyExperience from "../component/my-experience";
import { OG_BASE } from "../site-url";

export const metadata = {
  title: "Experience",
  alternates: { canonical: "/experience" },
  description:
    "Over 16 years of progressive experience in UI/UX design and frontend development, from graphic and web design through to enterprise SaaS product work.",
  openGraph: {
    ...OG_BASE,
    title: "Experience | Sachin Jadhav",
    description:
      "Over 16 years of progressive experience in UI/UX design and frontend development, from graphic and web design through to enterprise SaaS product work.",
    url: "/experience",
  },
};



function Experience() {
  return <>

<BreadCrumb
  title="My Experience"
  description="Over 16 years of progressive experience in UI/UX design and frontend development, working with startups and enterprises alike."
/>
<MyExperience/>


 </>;
}

export default Experience;
