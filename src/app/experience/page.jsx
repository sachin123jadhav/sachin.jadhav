import React from "react";
import BreadCrumb from "../component/breadcrumb";
import Services from "../component/services";
import MyExperience from "../component/my-experience";

export const metadata = {
  title: "Experience",
  description:
    "Over 15 years of progressive experience in UI/UX design and frontend development, from graphic and web design through to enterprise SaaS product work.",
};



function Experience() {
  return <>

<BreadCrumb
  title="My Experience"
  description="Over 15 years of progressive experience in UI/UX design and frontend development, working with startups and enterprises alike."
/>
<MyExperience/>


 </>;
}

export default Experience;
