"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function OurVision() {
  return (
    <section className="py-28">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 px-8">
          <Typography variant="h2" color="blue-gray" className="mb-4">
          Vision Statement:
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left lg:px-0  "
          >
            Our vision is to be the premier provider of holistic design and construction services, seamlessly integrating interior and exterior elements to create immersive, transformative experiences. We envision a future where our innovative solutions blur the lines between indoor and outdoor living, blurring boundaries and fostering a deeper connection to nature and community. By embracing cutting-edge technologies, sustainable practices, and a culture of continuous improvement, we aspire to shape environments that inspire, rejuvenate, and endure for generations to come, leaving a lasting legacy of beauty, functionality, and wellbeing.
          </Typography>
        </div>
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/mulan studio revised/image-0038.jpg"
            className="h-full max-h-[400px] w-full object-cover scale-100 rounded-xl"
            alt="mulan studio"
          />
        </div>
      </div>
    </section>
  );
}

export default OurVision;
