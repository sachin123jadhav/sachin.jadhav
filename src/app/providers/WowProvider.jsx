"use client";

import { useEffect } from "react";
import WOW from "wowjs";

export default function WowJsProvider({ children }) {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animate__animated",
      offset: 80,
      mobile: true,
      live: false,
    });

    wow.init();
  }, []);

  return children;
}
