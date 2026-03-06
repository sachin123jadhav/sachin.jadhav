import React from 'react'
import Badge from '../component/badge'
import { FaSearch, FaSitemap, FaPaintBrush, FaRocket } from "react-icons/fa";
import hrms from './../../../public/images/HRMS.jpg'
import jaivique from './../../../public/images/HRMS.jpg'
import Image from 'next/image';
import PortfolioFilter from '../component/projects';

function PortfolioSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  return (
    <section className="bg-[#faf9fb] py-20">

      <div className="container mx-auto px-4">

        {/* -------------------- HRMS PROJECT -------------------- */}

        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Image */}
          <div className="lg:col-span-6">
            <div className="aspect-video rounded-2xl border overflow-hidden group">
              <Image
                src={hrms}
                alt="HRMS Project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-6">

            <div className="flex flex-wrap gap-2">
              <Badge label="Figma" textColor="#442673" />
              <Badge label="Photoshop" textColor="#442673" />
              <Badge label="UI/UX" textColor="#442673" />
              <Badge label="React" textColor="#442673" />
              <Badge label="Tailwind CSS" textColor="#442673" />
              <Badge label="JavaScript" textColor="#442673" />
            </div>

            <h2 className="text-2xl text-purple-700 mt-6 font-semibold">
              Workfusion HRMS
            </h2>

            <p className="text-[#07bdd5]">
              UI Team Lead, UI/UX Designer & Frontend Developer
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Enterprise HR Management System (HRMS)
            </p>

            <p className="text-purple-700 mt-6 font-semibold">
              Project Overview
            </p>

            <p className="text-gray-700 mt-2">
              Workfusion HRMS is a comprehensive Human Resource Management System
              designed to streamline and automate HR operations including employee
              records, attendance, leave requests, payroll insights and internal
              communication.
            </p>

            <p className="text-gray-700 mt-3">
              The goal was to create a scalable and intuitive HR platform that
              simplifies complex HR workflows for both employees and administrators.
            </p>

          </div>
        </div>


        {/* -------------------- DETAILS SECTION -------------------- */}

        <div className="grid lg:grid-cols-3 gap-10 mt-12">

          <div>
            <p className="text-purple-700 font-semibold">UI/UX Design</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Led the UI/UX design team and ensured design consistency.</li>
              <li>Designed complete UI flows using Figma.</li>
              <li>Created wireframes and reusable design systems.</li>
              <li>Designed visual assets using Photoshop.</li>
              <li>Simplified complex HR workflows.</li>
            </ul>
          </div>

          <div>
            <p className="text-purple-700 font-semibold">
              Frontend Development
            </p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Converted Figma designs into responsive UI.</li>
              <li>Built reusable React components.</li>
              <li>Ensured cross-browser compatibility.</li>
              <li>Optimized performance and layout structure.</li>
            </ul>
          </div>

          <div>
            <p className="text-purple-700 font-semibold">Key Features</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li><strong>Employee Dashboard</strong> – Overview of employees.</li>
              <li><strong>Attendance & Leave</strong> – Leave management.</li>
              <li><strong>Profile Management</strong> – Employee data management.</li>
              <li><strong>Role-Based Access</strong> – HR admin & employee roles.</li>
              <li><strong>HR Analytics</strong> – Workforce insights.</li>
            </ul>
          </div>

        </div>



        {/* -------------------- SECOND PROJECT : JAIVIQUE -------------------- */}

        <div className="grid lg:grid-cols-12 gap-10 items-center mt-24">

          {/* Content */}
          <div className="lg:col-span-6">

            <div className="flex flex-wrap gap-2">
              <Badge label="Figma" textColor="#442673" />
              <Badge label="Photoshop" textColor="#442673" />
              <Badge label="Shopify" textColor="#442673" />
              <Badge label="Liquid" textColor="#442673" />
              <Badge label="HTML/CSS" textColor="#442673" />
              <Badge label="JavaScript" textColor="#442673" />
            </div>

            <h2 className="text-2xl text-purple-700 mt-6 font-semibold">
              Jaivique
            </h2>

            <p className="text-[#07bdd5]">
              UI/UX Designer & Frontend Developer
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Shopify E-commerce Website
            </p>

            <p className="text-purple-700 mt-6 font-semibold">
              Project Overview
            </p>

            <p className="text-gray-700 mt-2">
              Jaivique is a Shopify-based e-commerce platform designed to
              showcase premium products through a clean and modern online
              shopping experience.
            </p>

            <p className="text-gray-700 mt-3">
              The project focused on building an engaging storefront while
              improving UI elements during development to enhance product
              visibility, layout balance, and customer interaction.
            </p>

            <p className="text-purple-700 mt-6 font-semibold">
              My Role & Responsibilities
            </p>

            <p className="text-gray-700 mt-2">
              Designed the homepage UI mockup and enhanced the interface
              during development to improve usability, visual hierarchy,
              and product presentation.
            </p>

          </div>


          {/* Image */}
          <div className="lg:col-span-6">
            <div className="aspect-video rounded-2xl border overflow-hidden group">
              <Image
                src={jaivique}
                alt="Jaivique Shopify Project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

        </div>


        {/* JAIVIQUE DETAILS */}

        <div className="grid lg:grid-cols-3 gap-10 mt-12">

          <div>
            <p className="text-purple-700 font-semibold">UI/UX Design</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Created homepage UI mockup using Figma.</li>
              <li>Improved typography, spacing and layout balance.</li>
              <li>Enhanced product card UI.</li>
              <li>Optimized CTA placement and user flow.</li>
              <li>Maintained brand design consistency.</li>
            </ul>

          </div>

          <div>
            <p className="text-purple-700 font-semibold">
              Frontend Development
            </p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li>Developed Shopify storefront using Liquid.</li>
              <li>Implemented responsive layouts.</li>
              <li>Improved UI components during development.</li>
              <li>Optimized product collections and layouts.</li>
            </ul>

          </div>

          <div>
            <p className="text-purple-700 font-semibold">Key Features</p>

            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
              <li><strong>Modern Homepage</strong> – Brand-focused hero section.</li>
              <li><strong>Product Collections</strong> – Organized browsing.</li>
              <li><strong>Product Pages</strong> – Clean product presentation.</li>
              <li><strong>Responsive Design</strong> – Mobile friendly layout.</li>
              <li><strong>Optimized UI</strong> – Improved product display.</li>
            </ul>

          </div>

        </div>


      </div>
    </section>

   
    
  )
}

export default PortfolioSection

