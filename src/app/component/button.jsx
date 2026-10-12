"use client"; // only needed for Next.js 13+ App Router

import Link from "next/link";

/**
 * The site's single button design.
 *
 * Renders a real <button> when no `href` is given (pass `type="submit"` inside a
 * form), and a next/link when `href` is. Both paths share one set of classes, so
 * every button on the site stays visually identical.
 */
const BUTTON_CLASSES = `
  relative inline-block z-[1] overflow-hidden
  bg-gradient-to-br from-[#0fb3d3] to-[#7047c3]
  text-white dark:text-white
  px-[35px] h-[50px] leading-[50px]
  rounded-md shadow-[inset_-2px_-2px_2px_rgba(7,13,29,0.3)]
  dark:shadow-[inset_-2px_-2px_2px_rgba(255,255,255,0.1)]
  font-bold text-[16px] tracking-[0.02em] transition-all duration-1000
  xs:px-[25px]
  cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed
  group
`;

export default function AnimatedButton({
  href,
  label = "Resume",
  icon = null,
  target,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) {
  const classes = `${BUTTON_CLASSES} ${className}`;

  const content = (
    <>
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
          group-hover:scale-y-100 group-hover:origin-top -z-[1]
        "
      ></span>
    </>
  );

  // No href -> a real button, so form submits and in-page actions can use the
  // exact same design as the links.
  if (!href) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={target || undefined}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {content}
    </Link>
  );
}
