
import Link from "next/link";

import Services from "../component/services";
import About from "../component/about";

import Pricing from "../component/pricing";
import Blog from "../component/blog";
import Contact from "../component/contact";
import Footer from "../component/footer";
import Portfolio from "../component/portfolio";
import Review from "../component/testimonial";
import Switcher from "../component/switcher";
import Navbar from "../component/navbar";

function Home2() {

  return (
    <>
          <Navbar/>
          <section
            style={{ backgroundImage: `url(/images/bg/5.jpg)` }}
            className="py-36 lg:py-64 w-full table relative bg-no-repeat bg-center bg-cover"
            id="home"
          >
            <div className="container relative z-1">
              <div className="grid grid-cols-1 mt-12">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                  Everything you need to build <br /> a great company
                </h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl !text-lg">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered Tailwind CSS html
                  page.
                </p>

                <div className="relative mt-10">
                  <Link
                    href="#"
                    className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute lg:w-1/2 md:w-4/6 w-full h-full bg-gradient-to-t to-orange-600 from-orange-400 md:opacity-100 opacity-80 top-0"></div>
          </section>

          <About />

          <Services />

          <Portfolio />

          <Review />

          <Pricing />

          <Blog />

          <Contact />

          <Footer />

          <Switcher />
    </>
  );
}

export default Home2;
