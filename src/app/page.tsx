// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./home/hero";
import OnlineCourse from "./unused/online-course";
import WhyChooseUs from "./unused/why-choose-us";
import CarouselFeatures from "./unused/carousel-features";
import Pricing from "./unused/pricing";
import OtherCourses from "./unused/other-courses";
import Clients from "./clients/clients";
// import Skills from "./skills";
// import Projects from "./projects";
// import Resume from "./resume";
import Testimonial from "./unused/testimonial";
import PopularClients from "./unused/popular-clients";
import ContactForm from "./contact/contact-form";
import HeroText from "./home/hero-text";
import OurServices from "./home/our-services";
import OurApproach from "./home/our-approach";
import OurStory from "./home/our-story";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroText />
      <OurServices />
      <OurApproach />
      <OurStory />
      {/* <Clients /> */}
      {/* <CarouselFeatures /> */}
      {/* <Testimonial /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Resume /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      {/* <OnlineCourse /> */}
      {/* <WhyChooseUs /> */}
      
      {/* <Pricing /> */}
      {/* <OtherCourses /> */}
      <Footer />
    </>
  );
}
