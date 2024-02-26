// components
import { Navbar, Footer } from "@/components";

// sections
import OurMission from "./our-mission";
import OurVision from "./our-vision";
import SmallHero from "./small-hero";
import OurStory from "../home/our-story";

export default function About() {
  return (
    <>
      <Navbar />
      <SmallHero title="Redefine your workspace" height="65vh" />
      <OurStory />
      <OurMission />
      <OurVision />
      <Footer />
    </>
  );
}