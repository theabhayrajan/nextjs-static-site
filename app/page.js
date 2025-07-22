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
import { useState,useEffect } from "react";

export default function Home() {

   const [pageData, setPageData] = useState();
 


   
  useEffect(() => {
    

    const fetchPageData = async () => {
      try {
        const response = await fetch(
          `https://staging.ekarigar.com/medunit2/wp-json/custom/v1/elementor-page/3792`
        );

        // console.log("response",response)
        const data = await response.json();
        console.log("json data",data.data)

        if (data.success) {
          setPageData(data.data);
        } else {
          console.error("Failed to fetch: ", data);
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
      } 
    };

    fetchPageData();
  }, []);


// console.log("pagedata",pageData?.sections[0]?.images[5])
// console.log("pagedata - text data",pageData?.sections[0]?.text[1])






  return (
    <>
      {/* Hero Section */}
      <Intro pageData={pageData}/>

      {/* Services Carousel */}
      <CarouselPage pageData={pageData}/>

      {/* About Section */}
      <AboutPage pageData={pageData}/>

      {/* Appointment Section */}
      <Appointment pageData={pageData}/>

      {/* Case Studies */}
      <CaseStudie pageData={pageData} />

      {/* Stats Section */}
      <StatsSection  pageData={pageData}/>

      {/* Psychology Section */}
      <Psychology  pageData={pageData} />

      {/* Team Section */}
      
        <TeamMember  pageData={pageData} />
    

      {/* Testimonials */}
      <TestimonialsCarousel  pageData={pageData}/>

      {/* News & Blog */}
      <NewsBlog  pageData={pageData}/>

      {/* Footer */}
      <Footer />
    </>
  );
}
