import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Couple Therapy",
    description:
      "Duis aute irure dolor reprehenderit in voluteq velit esse fugiat...",
    image:
      "/images/service-1.jpg",
    icon:
      "/images/type-img1.png",
  },
  {
    title: "Family Counseling",
    description:
      "Ruis aute irure dolor reprehenderit in voluteq velit esse fugiat...",
    image:
      "/images/service-2.jpg",
    icon:
      "/images/type-img2.png",
  },
  {
    title: "Anxiety Disorder",
    description:
      "Nuis aute irure dolor reprehenderit in voluteq velit esse fugiat...",
    image:
      "/images/service-3.jpg",
    icon:
      "/images/type-img3.png",
  },
  {
    title: "Personal Meeting",
    description:
      "Guis aute irure dolor reprehenderit in voluteq velit esse fugiat...",
    image:
      "/images/service-4.jpg",
    icon:
      "/images/type-img4.png",
  },
];

export default function CarouselPage({pageData}) {
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  useEffect(() => {
    // Animate heading text on scroll
    gsap.from(textRef.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="bg-[#fcf7f0] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading Text Animation */}
        <div ref={textRef}>
          <p className="text-base font-semibold text-[#e78e67] mb-2 mt-10 pt-4">
           {pageData?.sections[1]?.text[0]}
          </p>
          <h2 className="text-lg lg:text-4xl font-semi font-medium leading-tight text-[#232323] mb-12">
            {pageData?.sections[1]?.text[1]}
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="flex items-center justify-center gap-4 relative">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="p-3 rounded-full hover:bg-gray-200 transition"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#517368]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="flex overflow-hidden w-[1200px]">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 300}px)` }}
            >
              {services.concat(services).map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md w-[260px] flex-shrink-0"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-t-2xl border-white border-10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[180px] object-cover transition-transform duration-300 hover:translate-y-1"
                    />
                  </div>

                  {/* Icon Overlapping */}
                  <div className="relative -mt-7 flex justify-center z-10">
                    <div className="w-[75px] h-[75px] bg-[#e78e67] rounded-full flex items-center justify-center shadow-md translate-y-[-2vh]">
                      <img src={item.icon} alt="" className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center px-6 pb-8">
                    <h3 className="text-xl font-semi font-medium text-[#232323]">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-500 font-semi mt-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href="#"
                      className="text-sm font-semibold text-[#156c5f] hover:text-[#ee8961]"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="p-3 rounded-full hover:bg-gray-200 transition"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#517368]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
