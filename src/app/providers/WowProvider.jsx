"use client";

import { useEffect } from "react";
import "animate.css";

export default function WowProvider({ children }) {
  useEffect(() => {
    // ✅ Import only on client
    import("wowjs").then(({ WOW }) => {
      new WOW({
        live: false, // prevents re-scanning of DOM
        offset: 0, // trigger animation when element is in view
        mobile: true, // allow on mobile
      }).init();
    });
  }, []);

  return <>{children}</>;
}
