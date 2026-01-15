"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CreativeLoader from "../component/creative-loader";

export default function PageLoaderProvider({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;

    // show loader on route change
    setLoading(true);

    timer = setTimeout(() => {
      setLoading(false);
    }, 400); // adjust duration if needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        aria-hidden={loading}
        className={loading ? "pointer-events-none" : ""}
      >
        {children}
      </div>

      <CreativeLoader show={loading} />
    </>
  );
}
