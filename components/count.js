"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection({pageData}) {
  const countRefs = useRef([]);
  const [startCount, setStartCount] = useState(Array(4).fill(false)); // to track which counts have started

  const stats = [
    {
      icon: pageData?.sections[5]?.images[0],
      number: 2850,
      label: pageData?.sections[5]?.text[0],
    },
    {
      icon: pageData?.sections[5]?.images[1],
      number: 1245,
      label: pageData?.sections[5]?.text[1],
    },
    {
      icon: pageData?.sections[5]?.images[2],
      number: 3358,
      label: pageData?.sections[5]?.text[2],
    },
    {
      icon: pageData?.sections[5]?.images[3],
      number: 2496,
      label: pageData?.sections[5]?.text[3],
    },
  ];

  useEffect(() => {
    countRefs.current.forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          setStartCount((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        },
        once: true, // only trigger once
      });
    });
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/bg-image.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a7263]/80" />

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#ee8961] rounded-full p-6 w-24 h-24 flex items-center justify-center mb-4 transform transition duration-300 hover:-translate-y-1">
                <img
                  src={item.icon}
                  alt={item.label }
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h2
                className="text-5xl font-bold"
                ref={(el) => (countRefs.current[index] = el)}
              >
                {startCount[index] ? (
                  <CountUp end={item.number} duration={2} />
                ) : (
                  0
                )}
              </h2>
              <p className="text-lg mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
