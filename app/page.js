"use client";

import Intro from "../components/home";
import CarouselPage from "../components/Services";
import AboutPage from "../components/About";
import Appointment from "../components/appotiment";
import CaseStudie from "../components/CaseStudies";
import StatsSection from "../components/count";
import Psychology from "../components/Psychology";
import TeamMember from "../components/TeamMember";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import NewsBlog from "../components/NewsBlog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Intro />

      {/* Services Carousel */}
      <CarouselPage />

      {/* About Section */}
      <AboutPage />

      {/* Appointment Section */}
      <Appointment />

      {/* Case Studies */}
      <CaseStudie />

      {/* Stats Section */}
      <StatsSection />

      {/* Psychology Section */}
      <Psychology />

      {/* Team Section */}
      
        <TeamMember />
    

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* News & Blog */}
      <NewsBlog />

      {/* Footer */}
      <Footer />
    </>
  );
}
