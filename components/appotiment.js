"use client";

import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

export default function AppointmentSection({pageData}) {
  return (
    <div className="w-full bg-[#ee8961] py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT: FORM */}
        <div className="text-white relative">
          <h4 className="text-lg font-semibold mb-2"> {pageData?.sections[3]?.text[0]}</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{pageData?.sections[3]?.text[1]}</h2>
          <p className="text-sm mb-6">{pageData?.sections[3]?.text[2]}</p>

          <form className="space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="pl-4 pr-10 py-3 w-full rounded bg-transparent border border-white text-white focus:outline-none"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="email"
                  placeholder="Email address"
                  className="pl-4 pr-10 py-3 w-full rounded bg-transparent border border-white text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Department & Doctor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                <select className="appearance-none p-3 w-full rounded bg-[#f18b6d] border border-white text-white cursor-pointer focus:outline-none">
                  <option>Choose Your Department</option>
                  <option>Psychology</option>
                  <option>Neurology</option>
                  <option>Cardiology</option>
                </select>
              </div>
              <div className="relative">
                <BsChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                <select className="appearance-none p-3 w-full rounded bg-[#f18b6d] border border-white text-white cursor-pointer focus:outline-none">
                  <option>Choose Doctor</option>
                  <option>Dr. Smith</option>
                  <option>Dr. Johnson</option>
                </select>
              </div>
            </div>

            {/* Date & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                className="p-3 w-full rounded bg-transparent border border-white text-white focus:outline-none"
              />
              <div className="relative">
                <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="pl-4 pr-10 py-3 w-full rounded bg-transparent border border-white text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-white text-black font-semi py-3 rounded hover:bg-teal-600 hover:text-white transition"
            >
              Make an Appointment
            </button>
          </form>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="hidden md:flex justify-center relative">
          <img
            src= {pageData?.sections[3]?.images[0]}
            alt="Appointment"
            className="w-full max-w-2xl h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* BACKGROUND LOGO ON LEFT SIDE */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20 hidden md:block z-0">
        <img
          src="/images/index3-banner-shape.png"
          alt="Background Logo"
          className="w-96 h-auto -translate-x-20"
        />
      </div>
    </div>
  );
}
