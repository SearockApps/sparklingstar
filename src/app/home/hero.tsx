"use client";

import { Button, Typography } from "@material-tailwind/react";
import { Constants } from "../Constants";

function Hero() {
  const bgImageName = Constants.banners[Math.floor(Math.random()*Constants.banners.length)]
  return (
    <div style={{
      backgroundImage: `url(/${bgImageName})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }} className="relative min-h-screen w-full">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography placeholder="test"
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Redefine your workspace
        </Typography>
        <Typography placeholder="test"
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Whether transforming indoor environments for optimal functionality or enhancing exteriors with captivating aesthetics, our team is dedicated to creating cohesive, inspiring spaces that reflect our clients&apos; visions and elevate the overall design experience.
        </Typography>
        <div>
          <Button placeholder="test" variant="gradient" color="white">
            Book an Appointment today
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
