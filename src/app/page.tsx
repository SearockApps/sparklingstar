// components
import { Navbar, Footer } from "@/app/common";

// sections
import { CarouselSlides } from "@/components/carousel-slides";
import { VideoComponent } from "@/components/video-component";
import WhyChooseUs from "./home/why-choose-us";
import OurProcess from "./home/our-process";
import Hero from "./home/hero";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselSlides />
      <WhyChooseUs />
      <VideoComponent videosrc="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4" />
      <OurProcess />
      <Footer />
    </>
  );
}
