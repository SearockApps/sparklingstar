// components
import { Navbar, Footer } from "@/app/common";

// sections
import OurMission from "./our-mission";
import OurVision from "./our-vision";
import SmallHero from "../example/small-hero";
import OurStory from "./our-story";

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
