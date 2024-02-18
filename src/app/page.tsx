// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OnlineCourse from "./online-course";
import WhyChooseUs from "./why-choose-us";
import CarouselFeatures from "./carousel-features";
import Pricing from "./pricing";
import OtherCourses from "./other-courses";
import Clients from "./clients";
// import Skills from "./skills";
// import Projects from "./projects";
// import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <CarouselFeatures />
      <Testimonial />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Resume /> */}
      {/* <Testimonial />
      <PopularClients />
      <ContactForm />
      <OnlineCourse />
      <WhyChooseUs />
      
      <Pricing />
      <OtherCourses /> */}
      <Footer />
    </>
  );
}
