// components
import { Navbar, Footer } from "@/components";

// sections
import SmallHero from "../about/small-hero";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <SmallHero title="" height="65vh" />
      <ContactForm />
      <Footer />
    </>
  );
}