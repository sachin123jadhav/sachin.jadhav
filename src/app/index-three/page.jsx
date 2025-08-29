"use client"
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
import { FiArrowRight } from "react-icons/fi";

function Index_three() {

  return (
    <>
          <Navbar/>
          <section
            style={{ backgroundImage: `url(/images/bg/4.jpg)` }}
            className="py-36 md:py-72 w-full table relative bg-center bg-cover jarallax"
            data-jarallax
            data-speed="0.5"
            id="home"
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
              <div className="grid grid-cols-1 text-center">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                  Do you want to change the world?
                </h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl !text-lg mx-auto">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered Tailwind CSS html
                  page.
                </p>

                <div className="text-center subcribe-form mt-4 pt-2">
                  <form className="relative mx-auto">
                    <input
                      type="email"
                      id="subemail"
                      name="email"
                      className="rounded-full bg-white opacity-70 border border-gray-200"
                      placeholder="E-mail :"
                    />
                    <button
                      type="submit"
                      className="btn !inline-flex items-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full"
                    >
                      Submit <FiArrowRight className="ms-1"/>
                    </button>
                  </form>
                </div>
              </div>
            </div>
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

export default Index_three;
