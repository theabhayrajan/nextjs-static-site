import React from "react";

const Footer = () => {
    return (
        <div className="relative bg-[#fffaf5]">
            {/* Newsletter Section (Overlapping Footer) */}
            <div className="absolute inset-x-0 -top-16 flex justify-center z-30 px-4 sm:px-6 lg:px-0">
                <div className="bg-[#ee8961] px-4 sm:px-6 py-4 sm:py-6 md:py-8 rounded-3xl w-full max-w-[90vw] sm:max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-lg">
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left leading-snug">
                        Subscribe To Our <br className="md:hidden" /> Newsletter
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <input
                            type="email"
                            placeholder="Your Email Address:"
                            className="rounded-md px-4 py-2 w-full sm:w-64 lg:w-[30vw] outline-none border border-white bg-white text-black placeholder-gray-500"
                            inputMode="email"
                            autoComplete="email"
                            required
                        />
                        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-orange-100 transition whitespace-nowrap">
                            Sign Up Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#156c5f] text-white relative pt-40 pb-10 overflow-hidden px-4 sm:px-6 lg:px-0">
                <div className="container mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm">
                    {/* Logo & Description */}
                    <div>
                        <div className="mb-4">
                            <img
                                src="/images/header-logo.png"
                                alt="Medunit Logo"
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-white text-sm leading-6">
                            Delentiti aeue corrupti quos dolores quas tias excepturi sint
                            occaecati rupidtate non similique sunt incidunt...
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-4">
                            <a
                                href="#"
                                className="bg-[#035e54] w-9 h-9 flex items-center justify-center rounded-full hover:bg-orange-400 transition"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="bg-[#035e54] w-9 h-9 flex items-center justify-center rounded-full hover:bg-orange-400 transition"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="bg-[#035e54] w-9 h-9 flex items-center justify-center rounded-full hover:bg-orange-400 transition"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* About Us */}
                    <div>
                        <h4 className="font-semibold text-white mb-3">About Us</h4>
                        <ul className="space-y-2 text-white">
                            {["Services", "Pricing", "Blog", "About", "Contact us"].map(
                                (item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <i className="fas fa-angle-right text-xs"></i>
                                        <a href="#" className="hover:underline">
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-3">Our Services</h4>
                        <ul className="space-y-2 text-white">
                            {[
                                "Couple Therapy",
                                "Family Counseling",
                                "Anxiety Disorder",
                                "Personal Meeting",
                                "Group Therapy",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <i className="fas fa-angle-right text-xs"></i>
                                    <a href="#" className="hover:underline">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info + Right Image Logo */}
                    {/* Contact Info + Right Image Logo */}
                    <div className="relative flex flex-col justify-between">
                        <div>
                            <h4 className="font-semibold text-white mb-3">Contact Info</h4>
                            <ul className="space-y-3 text-white text-sm">
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-phone-alt"></i>
                                    <span>+613 8376 6284</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <i className="fas fa-envelope"></i>
                                    <span>Info@medunit.com</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <i className="fas fa-map-marker-alt mt-1"></i>
                                    <span>
                                        21 King Street Melbourne,
                                        <br />
                                        3000, Australia
                                    </span>
                                </li>
                            </ul>
                        </div>

                       
                        <div className="hidden lg:block absolute bottom-0 right-0">
             
                            <img
                                src="/images/index3-banner-shape.png"  
                                alt="Footer Decorative Logo"
                                className="w-[360px] opacity-10 translate-x-60"
                            />
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-[#0f5e54] text-center pt-6 text-sm text-white">
                    Copyright © Medunit 2023. All rights reserved
                </div>
            </footer>
        </div>
    );
};

export default Footer;
