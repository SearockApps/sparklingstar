"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/banners/01.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Redefine your workspace
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Reputable and Experienced Team of Designers, Engineers, Project Managers and Reliable Manpower who offer Professional and Trustworthy service that exceeds every Client’s Expectations
        </Typography>
        <div>
          <Button variant="gradient" color="white">
            Book an Appointment today
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
