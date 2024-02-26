// components
import { Navbar, Footer } from "@/components";

// sections
import SmallHero from "../about/small-hero";
import ShowcaseGallery from "./showcase-gallery";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <SmallHero title="Gallery Showcase of Our Projects" height="65vh" />
      <ShowcaseGallery />
      <Footer />
    </>
  );
}