"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function OurMission() {
  return (
<section className="py-28">
<div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
  <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
    <Image
      width={768}
      height={500}
      src="/reception spa/img-1.jpg"
      className="h-full max-h-[300px] w-full object-cover scale-100 rounded-xl"
      alt="reception spa"
    />
  </div>

  <div className="col-span-2 px-8">
    <Typography variant="h2" color="blue-gray" className="mb-4">
    Mission Statement:
    </Typography>
    <Typography
      variant="lead"
      className="mb-5 text-left lg:px-0  "
    >
      Our mission is to create seamless transitions between interior and exterior spaces, crafting cohesive environments that harmonize with their surroundings and enrich the lives of those who inhabit them. Through innovative design, superior craftsmanship, and a deep understanding of our clients' needs, we strive to deliver integrated interior and exterior solutions that inspire, rejuvenate, and connect people with the natural world. With a commitment to sustainability, creativity, and excellence, we aim to exceed expectations and leave a positive impact on communities and environments alike.
    </Typography>
  </div>
</div>
</section>
  );
}

export default OurMission;
