import Link from 'next/link';
import React from 'react'
import { FiCheckCircle } from "react-icons/fi";

function About() {
  const items = [
    "B2B SaaS & Enterprise Platforms",
    "Complex Dashboard Design",
    "Workflow & Process Optimization",
    "Design Systems & Component Libraries",
    "Figma to Production Handoff",
    "Frontend Development Support",
  ];
  return (
   <section className='relative md:py-8 py-8  bg-slate-100  dark:bg-black-800 '>
      <div className="container">
          <div className="grid grid-cols-1 pb-8">

<div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10'>
  <div className="lg:col-span-6 wow animate__animated animate__fadeInLeft">

    <p className='mb-2'>I am a Senior UI/UX Designer and Frontend Developer with over 15 years of experience designing and developing user-friendly, scalable web applications.</p>
<p className='mb-2'>My background spans UI/UX design, frontend development, and platform implementation. I have worked extensively on B2B SaaS products, dashboards, and workflow-driven enterprise systems, handling everything from user flows and high-fidelity UI design in Figma to frontend implementation using HTML, CSS, JavaScript, React, and modern frameworks.</p>
<p className='mb-2'>I work closely with product managers, developers, and stakeholders to translate complex business requirements into clear, usable interfaces and production-ready solutions.

</p>
<h3 className='mt-4 text-2xl sm:text-3xl lg:text-2xl font-semibold'>My Approach</h3>

<p>I believe in designing with purpose. Every decision—from color choices to interaction patterns—should serve the user and the business goals. My process involves deep collaboration with cross-functional teams to understand requirements, iterate quickly, and deliver solutions that work in the real world.</p>
  
  <h3 className='mt-4 text-2xl sm:text-3xl lg:text-2xl font-semibold'>What I Do Best</h3>
   <ul className="space-y-3 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <FiCheckCircle className="text-emerald-500 mt-1 text-lg shrink-0" />
          <span className="text-gray-800 dark:text-gray-200">
            {item}
          </span>
        </li>
      ))}
    </ul>
  
  
  </div>
  <div className='lg:col-span-6 wow animate__animated animate__fadeInRight relative'>
    <div className="sticky top-24 space-y-6">
      {/* Profile Card */}
      <div className="p-8 rounded-2xl bg-white border border-border">
        <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
          <span className="font-display font-bold text-2xl text-accent">
            SJ
          </span>
        </div>

        <h3 className="font-display font-bold text-xl text-primary mb-2">
          Sachin Jadhav
        </h3>

        <p className="text-muted-foreground mb-6">
          Senior UI/UX Designer & Frontend Developer
        </p>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Experience</span>
            <span className="font-medium text-primary">15+ Years</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Location</span>
            <span className="font-medium text-primary">India</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Specialization</span>
            <span className="font-medium text-primary">B2B SaaS</span>
          </div>
        </div>
      </div>

      {/* CTA Card */}
      <div className="p-8 rounded-2xl bg-secondary/50 border border-border">
        <h4 className="font-display font-semibold text-primary mb-4">
          Let&apos;s Connect
        </h4>

        <p className="text-sm text-muted-foreground mb-4">
          Interested in working together? I&apos;d love to hear about your project.
        </p>

        <Link
          href="/contact"
          className="
            inline-flex items-center justify-center gap-2
            w-full h-10 px-5 rounded-lg
            text-sm font-medium
            bg-primary text-primary-foreground
            hover:bg-primary/90
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-ring focus-visible:ring-offset-2
          "
        >
          Get in Touch
        </Link>
      </div>
    </div>
     </div>

</div>

           
          </div>


          

          </div>

    </section>
  )
}

export default About