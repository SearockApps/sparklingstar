// components
import { Navbar, Footer } from "@/app/common";

// sections
import SmallHero from "../example/small-hero";
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
