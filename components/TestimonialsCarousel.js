"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsCarousel = ({pageData}) => {
  const testimonials = [
    {
      name: "Jonathan Andrew",
      role: "Happy Customer",
      text: `“Ignissimos ducimus ui blandiitis praesentium voluptatum deleniti atqui corrupti quos dolores aet quas molestias excepturi, sint occaesatii gnissimos ducimus molestiae non recusandae itarue earum rerum tenetur a saiente delectus.”`,
      image: "/images/client-img2.jpg",
    },
    {
      name: "Methew John",
      role: "Happy Customer",
      text: `“Dolorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum metus id elit dictum, sit amet tincidunt dolor egestas. Duis hendrerit mauris eget nisi ultricies, nec dignissim dui bibendum. Vestibulum ante ipsum.”`,
      image: "/images/client-img3.jpg",
    },
    {
      name: "John Weck",
      role: "Happy Customer",
      text: `“Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid.”`,
      image: "/images/client-img1.jpg",
    },
    {
      name: "Sarina William",
      role: "Happy Customer",
      text: `“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam,”`,
      image: "/images/client-img4.jpg",
    },
    {
      name: "Mark Jack",
      role: "Happy Customer",
      text: `“Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”`,
      image: "/images/client-img5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Default to John Weck
  const [isMobile, setIsMobile] = useState(false);
  const headingRef = useRef(null);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.from(headingRef.current.children, {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        once: true,
      },
    });
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative bg-white py-16 w-full px-4 sm:px-8">
      {/* ✅ Heading with GSAP animation */}
      <div ref={headingRef} className="text-center mb-10 space-y-2">
        <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest">
         {pageData?.sections[8]?.text[0]}
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        {pageData?.sections[8]?.text[1]}
        </h2>
      </div>

      {/* ✅ Testimonial Text Carousel */}
      <div className="flex items-center justify-center text-center px-4 sm:px-8 relative">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 p-4 text-3xl text-gray-600 hover:text-orange-500 focus:outline-none"
        >
          &lt;
        </button>
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <div className="flex justify-center mb-2 text-[#ffbf44] text-3xl">
              ★★★★★
            </div>
            <p className="text-gray-700 font-medium text-lg">
              {testimonials[currentIndex].text}
            </p>
          </div>
        </div>
        <button
          onClick={handleNextClick}
          className="absolute right-0 p-4 text-3xl text-gray-600 hover:text-orange-500 focus:outline-none"
        >
          &gt;
        </button>
      </div>

      {/* ✅ Image Thumbnails */}
      <div className="flex flex-col items-center mt-6 space-y-4">
        <div className="flex justify-center space-x-4">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentIndex;
            const size = isMobile
              ? isActive
                ? 72
                : 52
              : isActive
              ? 96
              : 64;

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer rounded-full overflow-hidden transition-transform duration-500 ease-in-out border-4 ${
                  isActive
                    ? "scale-110 opacity-100"
                    : "border-transparent scale-95 opacity-50"
                }`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Name and Role */}
        <div className="text-center mt-2">
          <h2 className="text-2xl font-semi text-[#232323] pb-2">
            {testimonials[currentIndex].name}
          </h2>
          <p className="text-sm text-gray-500">
            {testimonials[currentIndex].role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
