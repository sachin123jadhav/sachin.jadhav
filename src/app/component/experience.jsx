"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight } from 'react-icons/fa';
import { experiences } from "../data/experienceData"; 

function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        selectedExp &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setSelectedExp(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedExp]);

  useEffect(() => {
  if (selectedExp) {
    // Disable scroll
    document.body.style.overflow = "hidden";
  } else {
    // Enable scroll
    document.body.style.overflow = "auto";
  }

  // Cleanup on unmount
  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedExp]);


  return (
    <section id="Experience" className="relative md:py-24 py-16">
      <div className="container lg mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div key={exp.id}>
              <div
                className={`flex flex-col md:flex-row w-full gap-6 wow animate__animated animate__fadeInRight ${exp.customClass}`}
                data-wow-delay={`${0.3 + index * 0.2}s`}
              >
                {exp.position === "left" && (
                  <div
                    className={`relative w-full md:w-[180px] ${exp.bgColor} p-4 rounded-sm text-center text-white grid place-items-center`}
                  >
                    <h2 className="text-3xl font-bold">{exp.start}</h2>
                    <p>{exp.period}</p>
                    <h2 className="text-3xl font-bold">{exp.end}</h2>
                    <div
                      className={`hidden md:block absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[20px] ${exp.arrowColor} border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent z-[6]`}
                    ></div>
                  </div>
                )}

                <div className="w-full md:flex-1 p-4 shadow-[0_1px_3px_rgba(18,20,32,0.2)] rounded-sm border-white border-[1px] dark:border-slate-900 dark:border-[1px] dark:shadow-slate-700">
                  <h2 className="text-xl font-bold transition duration-500">
                    {exp.role}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 transition duration-300">
                    {exp.company}
                  </p>
                  <div className="text-black mt-2 line-clamp-2 dark:text-gray-200 transition duration-500" dangerouslySetInnerHTML={{ __html: exp.summery }} />

                  <button
                    onClick={() => setSelectedExp(exp)}
                    className="mt-5 !inline-flex cursor-pointer items-center btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500"
                  >
                    <span>Read More</span>
                    <FiArrowRight width="16px" />
                  </button>
                </div>

                {exp.position === "right" && (
                  <div
                    className={`relative w-full md:w-[180px] ${exp.bgColor} p-4 rounded-sm text-center text-white grid place-items-center`}
                  >
                    <h2 className="text-3xl font-bold">{exp.start}</h2>
                    <p>{exp.period}</p>
                    <h2 className="text-3xl font-bold">{exp.end}</h2>
                    <div
                      className={`hidden md:block absolute top-1/2 -left-[30px] translate-x-1/2 -translate-y-1/2 rotate-180 w-0 h-0 border-l-[20px] ${exp.arrowColor} border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent z-[6]`}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedExp && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white dark:bg-slate-800 rounded-lg max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer "
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedExp.role}</h2>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-gray-200 dark:border-slate-700 pb-2">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {selectedExp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-1 md:mt-0">
                {selectedExp.totalPeriod}
              </p>
            </div>

            <div className="text-gray-700 dark:text-gray-200 space-y-4">
              <div className=""
                dangerouslySetInnerHTML={{ __html: selectedExp.summery }}
              />

              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedExp.description }}
              />
              
            </div>
          </div>
        </div>
      )}

      
    </section>
  );
}

export default Experience;
