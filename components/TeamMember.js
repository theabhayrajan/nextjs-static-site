"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Alice Waters",
    role: "Sycho Founder",
    image: "/images/team-img1.jpg",
  },
  {
    name: "Jamie Oliver",
    role: "Sycho Founder",
    image: "/images/team-img2.jpg",
  },
  {
    name: "Clare Smyth",
    role: "Sycho Founder",
    image: "/images/team-img3.jpg",
  },
  {
    name: "Hekim Rswana",
    role: "Sycho Founder",
    image: "/images/team-img4.jpg",
  },
];

const TeamMember = ({pageData}) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const infoBox = card.querySelector(".info");
      if (!infoBox) return;

      gsap.set(infoBox, { y: "-100%", opacity: 0 });

      card.addEventListener("mouseenter", () => {
        gsap.to(infoBox, { y: "0%", opacity: 1, duration: 0.3 });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(infoBox, { y: "-100%", opacity: 0, duration: 0.3 });
      });
    });
  }, []);

  return (
    <section className="w-full bg-[#fdf8f3] py-16 px-4">
      {/* Header Text */}
      <div className="text-center mb-12">
        <p className="text-lg font-semibold text-[#ee8961]">{pageData?.sections[7]?.text[0]}</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#232323]">
          {pageData?.sections[7]?.text[1]}
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            {/* Card */}
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative w-full max-w-[300px] h-[400px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Hover Info Box */}
              <div className="info absolute top-0 left-0 right-0 bottom-0 bg-white p-4 m-4 rounded-xl opacity-0 z-10 shadow-lg pointer-events-none sm:pointer-events-auto">
                <div className="flex justify-center mb-4 space-x-4 text-gray-600 text-xl pt-20">
                  <a href="#" className="hover:text-blue-500">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <FaLinkedinIn />
                  </a>
                </div>
                <p className="text-sm text-center text-gray-500 font-sans mb-5">
                  Nuis aute irure dolor reprehenderit in voluptate velit esse fugiat...
                </p>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="text-white bg-[#ee8961] w-full max-w-[180px] text-center font-semibold py-2 px-4 rounded-xl text-sm hover:bg-[#156c5f] transition-all duration-300"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>

            {/* Name & Role */}
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-serif text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500 font-serif">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
