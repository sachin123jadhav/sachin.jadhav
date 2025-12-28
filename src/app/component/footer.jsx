import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiDribbble, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaBehance, FaFacebookF } from "react-icons/fa";
import Logo from "../../../public/images/SachinJadhavWhite.svg";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function Footer() {
  return (
    <>
      {/*  Start Footer  */}
      <footer className="py-8 bg-slate-800 dark:bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              {" "}
              <Image src={Logo} alt="figma" className="w-full" />
              <p className="text-white pt-8">
                Senior UI/UX Designer & Frontend Developer with 15+ years of
                experience in B2B SaaS, dashboards, and enterprise platforms.
              </p>
            </div>
            <div className="ml-20">
              <h3 className="font-medium text-2xl mb-4">Quick Links</h3>

              <ul className="space-y-3 text-gray-300">
                {["About", "Experience", "Portfolio", "Skills", "Contact"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <MdKeyboardDoubleArrowRight
                        size={18}
                        className="text-purple-500 transition-transform duration-300 group-hover:translate-x-1"
                      />
                      <span className="transition-colors duration-300 group-hover:text-white">
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              {" "}
              <h3 className="font-medium text-2xl mb-4">Get in Touch</h3>
              {/* Email */}
              <a
                href="mailto:sachin123jadhav@gmail.com"
                className="flex items-center gap-2 hover:text-purple-400 transition"
              >
                <FiMail size={18} />
                sachin123jadhav@gmail.com
              </a>
              {/* Phone */}
              <a
                href="tel:+919890122027"
                className="flex items-center gap-2 hover:text-purple-400 transition my-2"
              >
                <FiPhone size={18} />
                +91 9890122027
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/your-linkedin-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-400 transition mb-2"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-400 transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            </div>
            <div>
              {" "}
              <h3 className="font-medium text-2xl mb-4">Follow Me</h3>
              <div className="flex gap-4 text-gray-400">
                <a
                  href="https://instagram.com/your_username"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://facebook.com/your_username"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Grid: 1 column mobile, 2 columns from md */}
          <div className="grid grid-cols-1 md:grid-cols-1 items-center">
            {/* Left column */}
            <div className="mt-12 md:mt-0 flex  text-center justify-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Sachin Jadhav
              </p>
            </div>

            {/* Right column */}
           
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
