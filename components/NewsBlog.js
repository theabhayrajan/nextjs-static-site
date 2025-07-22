"use client";

import { useState, useEffect } from 'react';
import CarouselCard from '../components/NewsCarousel';

const cards = [
  {
    image: "/images/blog-1.jpg",
    date: "Dec 19, 2023",
    title: "The Role of Psychotherapy in Mental Health Treatment",
    description: "In the realm of mental health treatment, psychotherapy...",
  },
  {
    image: "/images/blog-post-1.jpg",
    date: "Dec 19, 2023",
    title: "Psychiatry vs. Psychology: Understanding the Differences",
    description: "The fields of psychiatry and psychology are integral...",
  },
  {
    image: "/images/blog-post-2.jpg",
    date: "Dec 19, 2023",
    title: "The Impact of Trauma on Mental Health: Approaches to Healing",
    description: "Trauma, often described as an overwhelming and distressing...",
  },
  {
    image: "/images/blog-1.jpg",
    date: "Dec 19, 2023",
    title: "Mental Health Awareness: Early Signs to Watch For",
    description: "Recognizing mental health issues early can greatly improve...",
  },
  {
    image: "/images/blog-post-1.jpg",
    date: "Dec 19, 2023",
    title: "Building Emotional Resilience in Difficult Times",
    description: "Emotional resilience can be cultivated through consistent habits...",
  },
  {
    image: "/images/blog-post-2.jpg",
    date: "Dec 19, 2023",
    title: "Understanding Burnout and How to Recover",
    description: "Burnout is more than just stress; it's a serious health issue...",
  },
];

export default function NewsBlog({pageData}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerSlide(1);       // small devices
      else if (width < 1024) setCardsPerSlide(2); // medium devices
      else setCardsPerSlide(3);                   // large devices
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  const getSlideCards = (slideIndex) => {
    const start = slideIndex * cardsPerSlide;
    return cards.slice(start, start + cardsPerSlide);
  };

  return (
    <div className="bg-[#fdf8f3] min-h-screen py-16 px-6 text-center">
      <p className="text-orange-500 text-md mb-2 font- Sans-serif">{pageData?.sections[9]?.text[0]}</p>
      <h1 className="text-4xl font- Sans-serif text-gray-800 mb-10">{pageData?.sections[9]?.text[1]}</h1>

      {/* Carousel Container */}
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
              {getSlideCards(slideIndex).map((card, index) => (
                <div key={index} className="flex-1 max-w-sm">
                  <CarouselCard {...card} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
