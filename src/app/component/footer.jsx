import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiDribbble, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaBehance, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/*  Start Footer  */}
   <footer className="py-8 bg-slate-800 dark:bg-gray-900">
  <div className="container">
    {/* Grid: 1 column mobile, 2 columns from md */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      
      {/* Left column */}
      <div className="mt-8 md:mt-0 flex justify-center md:justify-start">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Sachin Jadhav
        </p>
      </div>

      {/* Right column */}
      <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href="https://dribbble.com/shreethemes"
              target="_blank"
              className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
            >
              <FiDribbble width="17px" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.behance.net/shreethemes"
              target="_blank"
              className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
            >
              <FaBehance width="17px" />
            </Link>
          </li>
          <li>
            <Link
              href="http://linkedin.com/company/shreethemes"
              target="_blank"
              className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
            >
              <FiLinkedin width="17px" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/shreethemes"
              target="_blank"
              className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
            >
              <FaFacebookF width="17px" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/shreethemes/"
              target="_blank"
              className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
            >
              <FiInstagram width="17px" />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/shreethemes"
              target="_blank"
              className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
            >
              <FiTwitter width="17px"/>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  </div>
</footer>

      {/* <!-- End Footer --> */}

      {/* <!-- Back to top --> */}
      <Link
        href="home"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-orange-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </Link>
      {/* <!-- Back to top --> */}
    </>
  );
}
