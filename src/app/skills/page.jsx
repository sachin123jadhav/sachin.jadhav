import React from 'react'
import BreadCrumb from '../component/breadcrumb'
import MySkills from './MySkills'
import { OG_BASE } from "../site-url";

export const metadata = {
  title: "Skills",
  alternates: { canonical: "/skills" },
  description:
    "UI/UX design, Figma, design systems and dashboards, plus frontend development across HTML, CSS, JavaScript, React, and Tailwind CSS.",
  openGraph: {
    ...OG_BASE,
    title: "Skills | Sachin Jadhav",
    description:
      "UI/UX design, Figma, design systems and dashboards, plus frontend development across HTML, CSS, JavaScript, React, and Tailwind CSS.",
    url: "/skills",
  },
}





function Skills() {
  return (
    <>

    <BreadCrumb
  title="Skills"
  description="A comprehensive toolkit spanning design thinking, visual design, and frontend development technologies."
/>

<MySkills/>


    
    </>
  )
}

export default Skills