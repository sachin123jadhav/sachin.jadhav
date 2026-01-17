import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import AnimatedButton from "./button";
import { FiArrowRight } from "react-icons/fi";


export default function MyExperience() {
 

  return (
    <>
      {/* Start */}
      <section id="features" className="relative md:py-2 py-2">
        <div className="container md:mt-0 mt-1">
          <div className="grid grid-cols-1 mt-0  pb-10">
            <div className="timeline relative">
              <div className="timeline-item">
                <div className="grid sm:grid-cols-2">
                  <div className="duration date-label-left md:me-7 relative text-right">
                    <h3 className="text-xl font-semibold">
                      Metamind Systems Pvt. Ltd.
                    </h3>

                    <h4 className="text-lg font-medium">
                      Senior Web Designer / UI-UX & Frontend Lead
                    </h4>

                    <div className="flex items-start justify-end mt-2">
                      <div className="icons">
                        <FaRegCalendarAlt size={22} />
                      </div>

                      <div className="me-2">
                        <h5 className="text-md dark:text-white mb-2 ml-2">
                          July 2023 – Present
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-start justify-end mt-2">
                      <div className="icons">
                        <MdLocationOn size={24} />
                      </div>

                      <div className="me-2">
                        <h5 className="text-md dark:text-white mb-2">Pune</h5>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <div className="border border-gray-300 p-6 rounded-2xl event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                          Led end-to-end <strong>UI/UX design</strong> for a{" "}
                          <strong>B2B SaaS Document Management System</strong>
                          with complex workflows and role-based access control.
                        </li>
                        <li>
                          Designed <strong>enterprise dashboards</strong> and
                          data-heavy interfaces, improving{" "}
                          <strong>task completion rates by 22%</strong>.
                        </li>
                        <li>
                          Created{" "}
                          <strong>
                            50+ wireframes, interactive prototypes, and
                            high-fidelity UI screens
                          </strong>
                          using <strong>Figma</strong>.
                        </li>
                        <li>
                          Collaborated closely with{" "}
                          <strong>
                            product managers, developers, and stakeholders
                          </strong>
                          to simplify complex requirements and ensure alignment.
                        </li>
                        <li>
                          Optimized{" "}
                          <strong>
                            UI architecture and frontend performance
                          </strong>
                          , reducing <strong>page load time by 38%</strong> and
                          achieving
                          <strong>90+ Lighthouse scores</strong>.
                        </li>
                        <li>
                          Built and maintained{" "}
                          <strong>scalable design systems</strong> across
                          <strong>20+ application modules</strong>.
                        </li>
                        <li>
                          Mentored <strong>designers and developers</strong>,
                          reducing
                          <strong>UI rework by 25%</strong>.
                        </li>
                        <li>
                          Identified and resolved <strong>40+ UX issues</strong>
                          , reducing
                          <strong>release cycle delays by 28%</strong>.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event   md:me-7 border border-gray-300 p-6 rounded-2xl">
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                          Delivered <strong>20+ web applications</strong> and{" "}
                          <strong>50+ responsive websites</strong> with complex
                          admin panels and workflows.
                        </li>
                        <li>
                          Converted UI/UX designs into production-ready
                          frontends using
                          <strong>
                            {" "}
                            HTML, CSS, JavaScript, Bootstrap, and Tailwind
                          </strong>
                          .
                        </li>
                        <li>
                          Customized and extended{" "}
                          <strong>40+ WordPress themes and plugins</strong>,
                          improving <strong>Core Web Vitals by 45%</strong>.
                        </li>
                        <li>
                          Led UI modernization initiatives using{" "}
                          <strong>Figma design systems</strong>.
                        </li>
                        <li>
                          Built e-commerce platforms on{" "}
                          <strong>WooCommerce, Shopify, and OpenCart</strong>
                          with <strong>15–40% conversion improvements</strong>.
                        </li>
                        <li>
                          Integrated payment gateways including{" "}
                          <strong>Razorpay, PayPal, and Stripe</strong>.
                        </li>
                        <li>
                          Delivered <strong>200+ UI assets</strong> and
                          marketing visuals.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <h3 className="text-xl font-semibold">
                        EC Infosolutions Pvt. Ltd.
                      </h3>

                      <h4 className="text-lg font-medium">
                        Senior Web Designer / Frontend Developer
                      </h4>

                      <div className="flex items-start mt-2">
                        <div className="icons">
                          <FaRegCalendarAlt size={22} />
                        </div>

                        <div className="me-2">
                          <h5 className="text-md dark:text-white mb-2 ml-2">
                            Nov 2014 – Jun 2023
                          </h5>
                        </div>
                      </div>
                      <div className="flex items-start  mt-2">
                        <div className="icons">
                          <MdLocationOn size={24} />
                        </div>

                        <div className="me-2">
                          <h5 className="text-md dark:text-white mb-2">Pune</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item mt-5 pt-4 mb-12">
                <div className="grid sm:grid-cols-2">
                  <div className="duration date-label-left md:me-7 relative text-right">
                    <h3 className="text-xl font-semibold">
                      Earlier Experience
                    </h3>

                    <h4 className="text-lg font-medium">
                      Graphic & Web Designer
                    </h4>

                    <div className="flex items-start justify-end mt-2">
                      <div className="icons">
                        <FaRegCalendarAlt size={22} />
                      </div>

                      <div className="me-2">
                        <h5 className="text-md dark:text-white mb-2 ml-2">
                          2008 – 2014
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-start justify-end mt-2">
                      <div className="icons">
                        <MdLocationOn size={24} />
                      </div>

                      <div className="me-2">
                        <h5 className="text-md dark:text-white mb-2">Pune</h5>
                      </div>
                    </div>
                  </div>

                  <div className=" md:mt-0">
                    <div className="border border-gray-300 p-6 rounded-2xl event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="text-2xl  text-purple-800">
                          Prasanna Purple Mobility Solutions
                        </li>
                        <p>
                          Designed mock-ups, wireframes, and layout concepts for
                          20+ landing pages, improving visual hierarchy and user
                          flow, resulting in ~18% higher engagement and
                          time-on-page.
                        </p>
                        <p>
                          Developed and enhanced HTML4/5 & CSS2/3 websites
                          (Dreamweaver) with W3C compliance, cross-browser
                          support, and full mobile responsiveness, upgrading 15+
                          sites and improving performance by up to 35%.
                        </p>

                        <li className="text-2xl  text-purple-800">
                          Remote Control Media Inc.
                        </li>
                        <p>
                          Created 30+ website mock-ups and marketing assets
                          (brochures, emailers), optimizing visuals in Adobe
                          Photoshop and CorelDRAW to improve page load times by
                          ~15% while maintaining consistent brand messaging.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <AnimatedButton
              href="/projects"
              label="View Portfolio"
              icon={<FiArrowRight className="inline ms-2 text-xl" />}
              className=" bg-gradient-to-br from-[#7047c3] to-[#7047c3] mr-8"
            />
          </div>
        </div>
      </section>
    </>
  );
}
