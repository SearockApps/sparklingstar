"use client";
// components
import { Navbar, Footer } from "@/app/common";

// sections
import Hero from "../home/hero";
import OurApproach from "../home/our-approach";
import { CarouselSlides } from "@/components/carousel-slides";
import { VideoComponent } from "@/components/video-component";
import WhyChooseUs from "../home/why-choose-us";
import OurProcess from "../home/our-process";
import OnlineCourse from "./online-course";
import OtherCourses from "./other-courses";
import PopularClients from "./popular-clients";
import Pricing from "./pricing";
import Projects from "./projects";
import Resume from "./resume";
import Skills from "./skills";
import Testimonial from "../home/client-testimonials";
import SkillCard from "./skill-card";

export default function Example() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselSlides />
      <Skills />
      <VideoComponent videosrc="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4" />
      <OnlineCourse />
      <OtherCourses />
      <PopularClients />
      <Pricing />
      <Projects />
      <Resume />
      <Skills />
      <Testimonial />
      <OurApproach />
      <WhyChooseUs />
      <CarouselSlides />
      <OurProcess />
      <Footer />
    </>
  );
}
