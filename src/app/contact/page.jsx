import React from "react";


import Contact from "./contact-me";
import BreadCrumb from "../component/breadcrumb";
import { OG_BASE } from "../site-url";

export const metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description:
    "Get in touch with Sachin Jadhav for UI/UX design and frontend development work on SaaS and enterprise products.",
  openGraph: {
    ...OG_BASE,
    title: "Contact | Sachin Jadhav",
    description:
      "Get in touch with Sachin Jadhav for UI/UX design and frontend development work on SaaS and enterprise products.",
    url: "/contact",
  },
};

function ContactMe() {
  return (
    <>
      <BreadCrumb
        title="Let's Work Together"
        description="If you're looking for a Senior UI/UX Designer who can also build and support frontend implementation for SaaS and enterprise products, feel free to get in touch."
      />

      <Contact />
    </>
  );
}

export default ContactMe;
