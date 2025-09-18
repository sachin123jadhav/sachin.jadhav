"use client"; // only needed for Next.js 13+ App Router

import Link from "next/link";

export default function AnimatedButton({
  href = "#",
  label = "Resume",
  icon = null,
}) {
  return (
    <Link
      href={href}
      className="
        relative inline-block z-[1] overflow-hidden 
        bg-[#5B6CFF] text-white dark:bg-slate-500 dark:text-white 
        font-urban h-[60px] leading-[61px] px-[35px]
        rounded-full shadow-[inset_-2px_-2px_2px_rgba(7,13,29,0.3)] 
        dark:shadow-[inset_-2px_-2px_2px_rgba(255,255,255,0.1)]
        font-bold text-[16px] tracking-[0.02em] transition-all duration-1000
        xs:h-[50px] xs:leading-[50px] xs:px-[25px]
        group
      "
    >
      <span
        className="
          relative z-[5] text-white dark:text-white 
          transition-colors duration-500 
          group-hover:text-white group-hover:dark:text-black
        "
      >
        {label}
        {icon && <span className="inline ms-2">{icon}</span>}
      </span>

      <span
        className="
          absolute inset-0 -top-full -bottom-full 
          bg-black dark:bg-white 
          rounded-[95px] scale-y-0 origin-bottom 
          transition-transform duration-1000 ease-[cubic-bezier(.14,0,0,1.01)] 
          group-hover:scale-y-100 group-hover:origin-top -z-[1] after:block
        "
      ></span>
    </Link>
  );
}
