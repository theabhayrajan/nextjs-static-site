// pages/about.js

import React from 'react';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';

const AboutPage = ({pageData}) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 bg-white">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl w-full relative">

        {/* Left Section with Images */}
        <div className="relative w-full lg:w-1/2 mb-16 lg:mb-0">
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden mb-6">
            <img
              src={pageData?.sections[2]?.images[0]}
              alt="Therapy session"
              className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh] object-cover"
            />
          </div>

          {/* Video Thumbnail Image */}
          <div className="absolute left-0 bottom-0 transform -translate-x-1/3 translate-y-1/4 sm:-translate-x-1/4 sm:translate-y-1/4">
            <div className="relative w-[80vw] sm:w-[60vw] max-w-[330px] rounded-xl overflow-hidden">
              <img
                src={pageData?.sections[2]?.images[1]}
                alt="Group session"
                className="w-full h-[25vh] object-cover border-white border-8 rounded-3xl"
              />
           
            </div>
          </div>
             <div className="absolute inset-0 flex items-center justify-left">


                <img
                  src={pageData?.sections[2]?.images[2]}
                  alt="Play icon"
                  className="-translate-x-32 translate-y-48" />
              </div>
        </div>

        {/* Right Section with Content */}
        <div className="w-full lg:w-1/2 px-0 lg:pl-16">
          <p className="text-base text-[#ee8961] font-medium font-sans mb-2"> {pageData?.sections[2]?.text[0]}</p>
          <h2 className="text-3xl lg:text-4xl font-sans text-[#232323] leading-snug mb-4">
           {pageData?.sections[2]?.text[1]}
          </h2>
          <p className="text-gray-500 text-lg font-sans leading-relaxed mb-6">
            {pageData?.sections[2]?.text[2]}
          </p>

          {/* Services / Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 text-base text-[#232323] font-sans gap-4 mb-6">
            <FeatureItem text="Psychodynamic Therapy" />
            <FeatureItem text="Free Consultants" />
            <FeatureItem text="Couple Problem Therapy" />
            <FeatureItem text="Metal Satisfactions" />
          </div>

          <button className="bg-[#156c5f] text-white font-sans px-6 py-3 rounded-md hover:bg-[#ee8961] transform hover:-translate-y-1 transition duration-300">
           {pageData?.sections[2]?.text[3]}
          </button>

        </div>
      </div>
    </div>
  );
};

// Feature item with checkmark icon
const FeatureItem = ({ text }) => (
  <div className="flex items-center space-x-2 group">
    <FaCheckCircle className="text-[#ED806D] group-hover:text-black transition duration-300" />
    <span>{text}</span>
  </div>
);

export default AboutPage;
