import React from 'react'
import BreadCrumb from '../component/breadcrumb'
import PortfolioSection from './portfolio-section'

export const metadata = {
  title: "Portfolio",
  description:
    "Selected work across SaaS platforms, dashboards, enterprise systems, and frontend implementations — including HRMS, e-commerce, and document management.",
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