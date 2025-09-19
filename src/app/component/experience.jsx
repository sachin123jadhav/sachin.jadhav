import Link from 'next/link';
import React from 'react'
import { FiArrowRight } from 'react-icons/fi';

function Experience() {
  return (
    <>
      <section id="experience" className="relative md:py-24 py-16">
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
            <div>
              <div className="flex flex-col md:flex-row w-full gap-6">
                {/* Left Section – Fixed 180px on Desktop */}
                <div className="relative w-full md:w-[180px] bg-[#ff4b7e] p-4 rounded-sm text-center text-white grid place-items-center">
                  <h2 className="text-3xl font-bold">2023</h2>
                  <p>July to Present</p>
                  <h2 className="text-3xl font-bold">Present</h2>

                  {/* Triangle Arrow – shown only on desktop */}
                  <div
                    className="
        hidden md:block 
        absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2
        w-0 h-0 
        border-l-[20px] border-l-[#ff4b7e]
        border-t-[15px] border-t-transparent
        border-b-[15px] border-b-transparent
        z-[6]
      "
                  ></div>
                </div>

                {/* Right Section – Remaining space */}
                <div className="w-full md:flex-1  p-4 shadow-[0_1px_3px_rgba(18,20,32,0.2)] rounded-sm">
                  <h2 className="text-xl font-bold">Senior Web Designer</h2>
                  <p className="text-gray-600">Metamind Solutions Pvt. Ltd.</p>
                  <p className="text-black mt-2 line-clamp-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <Link
                    href="#"
                    className="mt-5 !inline-flex items-center btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500"
                  >
                    <span>Read More</span>
                    <FiArrowRight width="16px" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row w-full gap-6">
                {/* Left Section – Fixed 180px on Desktop */}
                <div className="relative w-full md:w-[180px] bg-[#fcc760] p-4 rounded-sm text-center text-white grid place-items-center">
                  <h2 className="text-3xl font-bold">2014</h2>
                  <p>Nov to June</p>
                  <h2 className="text-3xl font-bold">2023</h2>

                  {/* Triangle Arrow – shown only on desktop */}
                  <div
                    className="
        hidden md:block 
        absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2
        w-0 h-0 
        border-l-[20px] border-l-[#fcc760]
        border-t-[15px] border-t-transparent
        border-b-[15px] border-b-transparent
        z-[6]
      "
                  ></div>
                </div>

                {/* Right Section – Remaining space */}
                <div className="w-full md:flex-1  p-4 shadow-[0_1px_3px_rgba(18,20,32,0.2)] rounded-sm">
                  <h2 className="text-xl font-bold">Senior Web Designer</h2>
                  <p className="text-gray-600">Metamind Solutions Pvt. Ltd.</p>
                  <p className="text-black mt-2 line-clamp-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <Link
                    href="#"
                    className="mt-5 !inline-flex items-center btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500"
                  >
                    <span>Read More</span>
                    <FiArrowRight width="16px" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row w-full gap-6">
                {/* Right Section – Remaining space */}
                <div className="w-full md:flex-1  p-4 shadow-[0_1px_3px_rgba(18,20,32,0.2)] rounded-sm">
                  <h2 className="text-xl font-bold">Web Designer</h2>
                  <p className="text-gray-600">
                    Techguys247 IT Solution (P) Ltd.
                  </p>
                  <p className="text-black mt-2 line-clamp-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <Link
                    href="#"
                    className="mt-5 !inline-flex items-center btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500"
                  >
                    <span>Read More</span>
                    <FiArrowRight width="16px" />
                  </Link>
                </div>
                {/* Left Section – Fixed 180px on Desktop */}
                <div className="relative w-full md:w-[180px] bg-[#ff7551] p-4 rounded-sm text-center text-white grid place-items-center">
                  <h2 className="text-3xl font-bold">2014</h2>
                  <p>Aug to Oct</p>
                  <h2 className="text-3xl font-bold">2014</h2>

                  {/* Triangle Arrow – shown only on desktop */}
                  <div
                    className="
        hidden md:block 
        absolute 
    top-1/2 
    -left-[30px] 
    translate-x-1/2 
    -translate-y-1/2 
    rotate-180
    w-0 
    h-0 
    border-l-[20px] 
    border-l-[#ff7551] 
    border-t-[15px] 
    border-t-transparent 
    border-b-[15px] 
    border-b-transparent 
    z-[6]
      "
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row w-full gap-6">
                {/* Right Section – Remaining space */}
                <div className="w-full md:flex-1  p-4 shadow-[0_1px_3px_rgba(18,20,32,0.2)] rounded-sm">
                  <h2 className="text-xl font-bold">Graphic Web Designer</h2>
                  <p className="text-gray-600">
                    Prasanna Purple Mobility Solutions Pvt Ltd.
                  </p>
                  <p className="text-black mt-2 line-clamp-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <Link
                    href="#"
                    className="mt-5 !inline-flex items-center btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500"
                  >
                    <span>Read More</span>
                    <FiArrowRight width="16px" />
                  </Link>
                </div>
                {/* Left Section – Fixed 180px on Desktop */}
                <div className="relative w-full md:w-[180px] bg-[#00c8d8] p-4 rounded-sm text-center text-white grid place-items-center">
                  <h2 className="text-3xl font-bold">2010</h2>
                  <p>March to Aug</p>
                  <h2 className="text-3xl font-bold">2014</h2>

                  {/* Triangle Arrow – shown only on desktop */}
                  <div
                    className="
        hidden md:block 
        absolute 
    top-1/2 
    -left-[30px] 
    translate-x-1/2 
    -translate-y-1/2 
    rotate-180
    w-0 
    h-0 
    border-l-[20px] 
    border-l-[#00c8d8] 
    border-t-[15px] 
    border-t-transparent 
    border-b-[15px] 
    border-b-transparent 
    z-[6]
      "
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row w-full gap-6">
                {/* Left Section – Fixed 180px on Desktop */}
                <div className="relative w-full md:w-[180px] bg-[#7709d7] p-4 rounded-sm text-center text-white grid place-items-center">
                  <h2 className="text-3xl font-bold">2009</h2>
                  <p>June to Feb</p>
                  <h2 className="text-3xl font-bold">2010</h2>

                  {/* Triangle Arrow – shown only on desktop */}
                  <div
                    className="
        hidden md:block 
        absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2
        w-0 h-0 
        border-l-[20px] border-l-[#7709d7]
        border-t-[15px] border-t-transparent
        border-b-[15px] border-b-transparent
        z-[6]
      "
                  ></div>
                </div>

                {/* Right Section – Remaining space */}
                <div className="w-full md:flex-1  p-4 shadow-[0_1px_3px_rgba(18,20,32,0.2)] rounded-sm">
                  <h2 className="text-xl font-bold">Flash Designer</h2>
                  <p className="text-gray-600">Remote Control Media INC.</p>
                  <p className="text-black mt-2 line-clamp-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <Link
                    href="#"
                    className="mt-5 !inline-flex items-center btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500"
                  >
                    <span>Read More</span>
                    <FiArrowRight width="16px" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience