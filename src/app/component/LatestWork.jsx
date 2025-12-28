"use client";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

/* ---------- DATA ---------- */
const workData = [
  {
    title: "App Design",
    category: "Mobile App",
    image: "/images/portfolio/img-1.png",
  },
  {
    title: "Web Design",
    category: "E-Commerce",
    image: "/images/portfolio/img-2.png",
  },
  {
    title: "Web Design",
    category: "E-Commerce",
    image: "/images/portfolio/img-3.png",
  },
  {
    title: "Dashboard UI",
    category: "B2B SaaS",
    image: "/images/portfolio/img-4.png",
  },
  {
    title: "Dashboard UI",
    category: "B2B SaaS",
    image: "/images/portfolio/img-5.png",
  },
];

export default function LatestWork() {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);

  const slide = (direction) => {
    if (!sliderRef.current || !cardRef.current) return;

    const cardWidth =
      cardRef.current.offsetWidth +
      parseInt(getComputedStyle(sliderRef.current).gap || 40);

    sliderRef.current.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              My Latest Work
            </h2>
            <p className="text-slate-500 mt-2">
              Perfect solution for digital experience
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => slide(-1)}
              className="w-11 h-11 rounded-full border border-teal-400 text-teal-500 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={() => slide(1)}
              className="w-11 h-11 rounded-full border border-teal-400 text-teal-500 flex items-center justify-center hover:bg-teal-500 hover:text-white transition"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {workData.map((item, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="
                relative
                min-w-[85%]
                sm:min-w-[70%]
                md:min-w-[55%]
                lg:min-w-[40%]
                xl:min-w-[35%]
                h-[420px]
                rounded-[48px]
                overflow-hidden
                bg-cover
                bg-center
                transition-transform duration-300 hover:scale-[1.02]
              "
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-8 left-8 z-10 text-white">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm opacity-90">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
