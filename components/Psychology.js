// pages/therapy.js

import Image from 'next/image';

export default function Psychology() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full rounded-xl p-6 flex flex-col md:flex-row md:items-start gap-10">

                {/* Left Image Section */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/How-it-work-img.png"
                        alt="Therapy Session"
                        width={600}
                        height={700}
                        className="rounded-3xl object-cover w-full h-auto"
                    />
                </div>

                {/* Right Text Content */}
                <div className="w-full md:w-1/2">
                    <p className="text-base text-[#ee8961] font-sans mb-2">How it Works</p>
                    <h2 className="text-3xl sm:text-4xl text-[#232323] font-sans mb-10 mt-4 leading-snug">
                        Professional Psychology<br /> Therapy You Can Choose
                    </h2>

                    {/* Feature 1 */}
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-dotted border-[#F19C7D] bg-white flex items-center justify-center ">
                            <Image
                                src="/images/how-it-works-icon-1.png"
                                alt="Talk Icon"
                                width={40}
                                height={40}
                                className='transform hover:-translate-y-1 transition duration-300'
                            />
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl text-[#232323] font-medium font-sans mb-2">Talk to Us First</h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium font-sans mb-7 max-w-xs">
                                Nuis aute irure dolor reprehenderit in voluptate velit esse fugiat.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-dotted border-[#F19C7D] bg-white flex items-center justify-center">
                            <Image
                                src="/images/how-it-works-icon-2.png"
                                alt="Appointment Icon"
                                width={40}
                                height={40}
                                className='transform hover:-translate-y-1 transition duration-300'
                            />
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl text-[#232323] font-medium font-sans mb-2">Book an Appointment</h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium font-sans mb-7 max-w-xs">
                                Blandit fauce bus perce viverra sem rutrum aeu vulputate came.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-start space-x-4 mb-6">
                        <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full border-2 border-dotted border-[#F19C7D] bg-white flex items-center justify-center">
                            <Image
                                src="/images/how-it-works-icon-3.png"
                                alt="Sit Icon"
                                width={40}
                                height={40}
                                 className='transform hover:-translate-y-1 transition duration-300'
                            />
                        </div>
                        <div>
                            <h4 className="text-lg sm:text-xl text-[#232323] font-medium font-sans mb-2">Come Sit With Us</h4>
                            <p className="text-gray-500 text-sm sm:text-base font-medium font-sans max-w-xs">
                                Maiores alias consequatur aut perferendis dolor reus asperiores repellat.
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-4 bg-[#156c5f] text-white px-6 py-3 rounded-md hover:bg-[#ee8961]  transform hover:-translate-y-3 transition duration-300">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
}
