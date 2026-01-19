import React from 'react'
import Badge from '../component/badge'
import { FaSearch, FaSitemap, FaPaintBrush, FaRocket } from "react-icons/fa";
import hrms from './../../../public/images/HRMS.jpg'
import Image from 'next/image';

function PortfolioSection() {
  return (
    <section className='bg-[#faf9fb] py-20'>

        <div className="container">
        <div className="grid grid-cols-1 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-6 wow animate__animated animate__fadeInLeft">
<div
  className="aspect-video rounded-2xl border border-border overflow-hidden relative group bg-img bg-cover bg-center"
>
      
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" /> */}

      {/* Center Content */}
      
<Image src={hrms} alt="HRMS Project" className="w-full object-top  group-hover:scale-105 transition-transform duration-300" />
     

    </div>
            </div>
             <div className="lg:col-span-6 wow animate__animated animate__fadeInRight relative">
              <div>
              <Badge label="Figma" textColor='#442673'  />
              <Badge label="UI/UX" textColor='#442673'  />
              <Badge label="Prototype" textColor='#442673'  />
              <Badge label="React" textColor='#442673'  />
              <Badge label="Tailwind" textColor='#442673'  />
</div>

<h2 className='text-2xl text-purple-700 mt-6 text-semibold'>Workfusion HRMS</h2>
<p className='text-[#07bdd5]'>UI/UX Designer & Frontend Developer</p>

<p className='text-purple-700 mt-4'>The Challenge</p>
<p>Complex HR workflows spanning multiple user roles with different permission levels</p>

<p className='text-purple-700 mt-4'>Solution</p>

    <ul className="space-y-3 mt-2">
    <li className="flex items-center gap-3">
      <FaSearch className="text-blue-500" />
      <span>User Research & Flows</span>
    </li>

    <li className="flex items-center gap-3">
      <FaSitemap className="text-blue-500" />
      <span>Wireframes & IA</span>
    </li>

    <li className="flex items-center gap-3">
      <FaPaintBrush className="text-blue-500" />
      <span>High-Fidelity Design</span>
    </li>

    <li className="flex items-center gap-3">
      <FaRocket className="text-blue-500" />
      <span>Prototype & Handoff</span>
    </li>
  </ul>
  <p className='text-purple-700 mt-4'>Outcome</p>

    <ul className="space-y-2 mt-2 list-disc list-inside">
   <li><strong>22%</strong> Improvement in task completion rate</li>
    <li><strong>35%</strong> Reduction in user support tickets</li>
    <li><strong>3×</strong> Faster design-to-dev handoff</li>
  </ul>


             </div>
        </div>
        </div>
        </div>
        
    </section>
  )
}

export default PortfolioSection