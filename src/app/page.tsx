// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./home/hero";
import ContactForm from "./contact/contact-form";
import HeroText from "./home/hero-text";
import OurApproach from "./home/our-approach";
import OurStory from "./home/our-story";
import { CarouselSlides } from "@/components/carousel-slides";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurApproach />
      <CarouselSlides />
      <Footer />
    </>
  );
}
