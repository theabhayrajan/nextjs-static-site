import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Intro({ pageData }) {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />

      <div className="absolute inset-0 -z-10 w-full h-full">
        <img
          src="/images/Home-01-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#156c5f] opacity-90"></div>
      </div>


      {/* Main content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-40">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <p className="text-base md:text-lg tracking-widest uppercase text-teal-300">
            {pageData?.sections[0]?.text[0]}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {pageData?.sections[0]?.text[1]}
          </h1>
          <p className="text-gray-100 text-xl max-w-xl">
            {pageData?.sections[0]?.text[2]}
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <button className="bg-[#ee8961] text-white hover:bg-white hover:text-black px-6 py-3 rounded  font-semibold text-base transform hover:-translate-y-3 transition duration-300">
              {pageData?.sections[0]?.text[3]}
            </button>
            <button className="bg-white text-black hover:bg-[#ee8961] hover:text-white px-6 py-3 rounded font-semibold text-base transform hover:-translate-y-3 transition duration-300">
              {pageData?.sections[0]?.text[4]}
            </button>
          </div>
        </div>

        {/* Image Stack - hidden on small screens */}
        <div className="md:w-1/2 mt-12 md:mt-0 md:flex flex-row items-center space-y-6 hidden sm:flex">
          <div className="flex flex-col gap-3 space-x-6">
            <div className="bg-white h-[8vh] flex self-end w-[8vh] rounded-xl"></div>

            <div>
              <img
                src={pageData?.sections[0]?.images[5]}
                alt="Therapist"
                width={450}
                height={450}
                className="rounded-3xl object-cover shadow-lg"
              />
            </div>

            <div className=" bg-[#ee8961] h-[8vh] w-[8vh] rounded-xl"></div>
          </div>

          <div>
            <div className="flex space-x-6">
              <img
                src={pageData?.sections[0]?.images[7]}
                alt="Counseling"
                width={400}
                height={250}
                className="rounded-3xl object-cover shadow-lg"
              />
            </div>
            <div>
              <img
                src={pageData?.sections[0]?.images[8]}
                alt="Group Talk"
                width={400}
                height={400}
                className="rounded-3xl object-cover shadow-lg mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
