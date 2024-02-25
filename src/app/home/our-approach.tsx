"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function OurApproach() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h1" color="blue-gray" className="mb-4">
          Our Approach
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            At the heart of our design philosophy lies the belief that every space should reflect the unique personalities and aspirations of our clients. Our collaborative approach involves working closely with you to understand your preferences, needs, and lifestyle, ensuring that our designs and renovation service resonate with your vision.
          </Typography>
        </div>
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
      </div>
    </section>
  );
}

export default OurApproach;
