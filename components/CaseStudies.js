"use client";

import { useState, useEffect } from "react";
import CarouselCard from "../components/CaseCarousel";

const cards = [
  {
    image: "/images/case-1.jpg",
    category: "Couple Problem",
    title: "Mental Consult",
    description: "Nostrud exercitation aute irure...",
  },
  {
    image: "/images/case-2.jpg",
    category: "Frustation",
    title: "Depression",
    description: "Gostrud exercitation aute irure...",
  },
  {
    image: "/images/case-3.jpg",
    category: "Individual",
    title: "Personal Meeting",
    description: "Eostrud exercitation aute irure...",
  },
  {
    image: "/images/case-1.jpg",
    category: "Couple Problem",
    title: "Mental Consult 2",
    description: "Another consultation example...",
  },
  {
    image: "/images/case-2.jpg",
    category: "Frustation",
    title: "Depression 2",
    description: "Another depression session...",
  },
  {
    image: "/images/case-3.jpg",
    category: "Individual",
    title: "Personal Meeting 2",
    description: "Another meeting session...",
  },
];

export default function CaseStudie() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerSlide(1); // sm
      } else if (width < 1024) {
        setCardsPerSlide(2); // md
      } else {
        setCardsPerSlide(3); // lg and above
      }
    };

    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  return (
    <div className="bg-[#fdf8f3] min-h-screen py-16 px-6 text-center">
      <p className="text-orange-500 text-sm mb-2">Latest Projects</p>
      <h1 className="text-4xl font-semibold text-gray-800 mb-10">
        Explore Our Latest Case Studies
      </h1>

      {/* Carousel */}
      <div className="overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${100 * totalSlides}%`,
            transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
          }}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex w-full justify-center gap-6 px-4"
              style={{ width: `${100 / totalSlides}%` }}
            >
              {cards
                .slice(
                  slideIndex * cardsPerSlide,
                  slideIndex * cardsPerSlide + cardsPerSlide
                )
                .map((card, index) => (
                  <div key={index} className="flex-1 max-w-sm">
                    <CarouselCard {...card} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
