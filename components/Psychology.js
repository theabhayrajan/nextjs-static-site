// pages/therapy.js

import Image from 'next/image';

export default function Psychology({pageData}) {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-10">

                {/* Left Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={pageData?.sections[6]?.images[0]}
                        alt="Therapy Session"
                        width={600}
                        height={700}
                        className="rounded-3xl object-cover w-full h-auto"
                    />
                </div>

                {/* Right Text Content */}
                <div className="w-full md:w-1/2">
                    <p className="text-base text-[#ee8961] font-sans mb-2">{pageData?.sections[6]?.text[0]}</p>
                    <h2 className="text-3xl sm:text-4xl text-[#232323] font-sans mb-10 mt-4 leading-snug">
                      {pageData?.sections[6]?.text[1]}
                    </h2>

                    {/* Feature 1 */}
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-dotted border-[#F19C7D] bg-white flex items-center justify-center ">
                            <img
                                src={pageData?.sections[6]?.images[1]}
                                alt="Talk Icon"
                                width={40}
                                height={40}
                                className='transform hover:-translate-y-1 transition duration-300'
                            />
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl text-[#232323] font-medium font-sans mb-2">{pageData?.sections[6]?.text[2]}</h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium font-sans mb-7 max-w-xs">
                               {pageData?.sections[6]?.text[3]}
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-dotted border-[#F19C7D] bg-white flex items-center justify-center">
                            <img
                                src={pageData?.sections[6]?.images[2]}
                                alt="Appointment Icon"
                                width={40}
                                height={40}
                                className='transform hover:-translate-y-1 transition duration-300'
                            />
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl text-[#232323] font-medium font-sans mb-2">{pageData?.sections[6]?.text[4]}</h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium font-sans mb-7 max-w-xs">
                               {pageData?.sections[6]?.text[5]}
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-dotted border-[#F19C7D] bg-white flex items-center justify-center">
                            <img
                                src={pageData?.sections[6]?.images[3]}
                                alt="Sit Icon"
                                width={40}
                                height={40}
                                 className='transform hover:-translate-y-1 transition duration-300'
                            />
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl text-[#232323] font-medium font-sans mb-2">{pageData?.sections[6]?.text[6]}</h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium font-sans max-w-xs">
                               {pageData?.sections[6]?.text[7]}
                            </p>
                        </div>
                    </div>
        
                    {/* Button */}
                    <button className="mt-4 bg-[#156c5f] text-white px-6 py-3 rounded-md hover:bg-[#ee8961]  transform hover:-translate-y-3 transition duration-300">
                        {pageData?.sections[6]?.text[8]}
                    </button>
                </div>
            </div>
        </div>
    );
}
