import React from 'react'
import BreadCrumb from '../component/breadcrumb'
import PortfolioSection from './portfolio-section'
import { OG_BASE } from "../site-url";

export const metadata = {
  title: "Portfolio",
  alternates: { canonical: "/portfolio" },
  description:
    "Selected work across SaaS platforms, dashboards, enterprise systems, and frontend implementations — including HRMS, e-commerce, and document management.",
  openGraph: {
    ...OG_BASE,
    title: "Portfolio | Sachin Jadhav",
    description:
      "Selected work across SaaS platforms, dashboards, enterprise systems, and frontend implementations — including HRMS, e-commerce, and document management.",
    url: "/portfolio",
  },
}


function portfolio() {
  return (
    <>

    <BreadCrumb
  title="Portfolio"
  description="Selected work from SaaS platforms, dashboards, enterprise systems, and frontend implementations."
/>
<PortfolioSection/>

    
    </>
  )
}

export default portfolio