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

function Index_six() {

  return (
    <>
          <Navbar/>
          <section
            style={{ backgroundImage: `url(/images/bg/video.jpg)` }}
            className="py-36 lg:py-64 w-full table relative bg-center bg-cover"
            id="home"
          >
            <div className="bg-video-wrapper">
              <iframe title="iframe" src="https://player.vimeo.com/video/863336181?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe>
            </div>
            <div className="absolute inset-0 bg-slate-900/80"></div>
            <div className="container relative">
              <div className="grid grid-cols-1 text-center">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                  We Collaboration Easy & fast
                </h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl !text-lg mx-auto">
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

export default Index_six;
