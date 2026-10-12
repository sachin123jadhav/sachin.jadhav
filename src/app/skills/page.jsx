import React from 'react'
import BreadCrumb from '../component/breadcrumb'
import MySkills from './MySkills'

export const metadata = {
  title: "Skills",
  description:
    "UI/UX design, Figma, design systems and dashboards, plus frontend development across HTML, CSS, JavaScript, React, and Tailwind CSS.",
}





function Skills() {
  return (
    <>

    <BreadCrumb
  title="Skills"
  description="A comprehensive toolkit spanning design thinking, visual design, and frontend development technologies."
/>

<MySkills/>
{/* <MySkills/> */}


    
    </>
  )
}

export default Skills