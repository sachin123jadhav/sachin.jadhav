import React from "react";


import Contact from "./contact-me";
import BreadCrumb from "../component/breadcrumb";

function ContactMe() {
  return (
    <>
      <BreadCrumb
        title="Contact Me"
        description="A Senior UI/UX Designer and Frontend Developer with a passion for creating beautiful, functional, and user-centric digital experiences."
      />

      <Contact />
    </>
  );
}

export default ContactMe;
