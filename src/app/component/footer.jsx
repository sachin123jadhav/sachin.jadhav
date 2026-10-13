import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiGithub,
} from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Logo from "../../../public/images/SachinJadhavWhite.svg";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sachin_jadhav1234/",
    icon: FiInstagram,
    hover: "hover:text-pink-500",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/sachin123jadhav",
    icon: FiFacebook,
    hover: "hover:text-blue-600",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sachin123jadhav/",
    icon: FiLinkedin,
    hover: "hover:text-sky-400",
  },
  {
    label: "GitHub",
    href: "https://github.com/sachin123jadhav",
    icon: FiGithub,
    hover: "hover:text-gray-300",
  },
];

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800 dark:bg-slate-900 text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <Image
              src={Logo}
              alt="Sachin Jadhav"
              className="w-full max-w-[220px]"
            />
            <p className="text-white pt-8">
              Senior UI/UX Designer &amp; Frontend Developer with 15+ years of
              experience in B2B SaaS, dashboards, and enterprise platforms.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-2xl mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-2 group">
                    <MdKeyboardDoubleArrowRight
                      size={18}
                      className="text-purple-500 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span className="transition-colors duration-300 group-hover:text-white">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-2xl mb-4">Get in Touch</h3>

            <a
              href="mailto:sachin123jadhav@gmail.com"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FiMail size={18} />
              sachin123jadhav@gmail.com
            </a>

            <a
              href="tel:+919890122027"
              className="flex items-center gap-2 hover:text-purple-400 transition my-2"
            >
              <FiPhone size={18} />
              +91 9890122027
            </a>

            <a
              href="https://www.linkedin.com/in/sachin123jadhav/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition mb-2"
            >
              <FiLinkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/sachin123jadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FiGithub size={18} />
              GitHub
            </a>
          </div>

          <div>
            <h3 className="font-medium text-2xl mb-4">Follow Me</h3>

            <div className="flex gap-4 text-gray-400">
              {socials.map(({ label, href, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  className={`${hover} transition`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex text-center justify-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sachin Jadhav
          </p>
        </div>
      </div>
    </footer>
  );
}
