"use client";

import { Typography } from "@material-tailwind/react";
import { Constants } from "../constants";

interface SmallHeroProps {
  title: string;
  height: string
}
function SmallHero({ title, height }: SmallHeroProps) {
  const bgImageName = Constants.banners[Math.floor(Math.random()*Constants.banners.length)]
  return (
    <div style={{
      backgroundImage: `url(/${bgImageName})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: height
    }} className="relative w-full">
    <div className="absolute inset-0 bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          {title}
        </Typography>
      </div>
    </div>
  </div>
  );
}
export default SmallHero;
