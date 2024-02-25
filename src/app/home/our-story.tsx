"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function OurStory() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h1" color="blue-gray" className="mb-4">
          Our Story
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Our journey began with a shared vision to bring creativity, elegance, and functionality together in every project we undertake. Over the years, we have grown into a dynamic team of skilled designers, engineers and architects collaborating to turn visions into reality.
          </Typography>

          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            At Sparkling Star Interior Design and Fitout, our vision is to be the catalyst for transformative spaces. We aspire to set the benchmark in the industry by seamlessly blending cutting-edge design, functionality, and client aspirations. With a commitment to innovation and excellence, we envision crafting environments that not only meet but exceed expectations, leaving a lasting impression of sophistication and style.
          </Typography>

          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            In the realm of interiors and fitout, Sparkling Star is your partner in creating environments that not only meet but exceed expectations. We meticulously blend cutting-edge design with practical solutions, ensuring each space tells a unique story. Our commitment to innovation and excellence shines through, leaving an indelible mark of sophistication in every project we undertake. Welcome to a world where your aspirations take center stage, and every detail contributes to a harmonious and inspiring atmosphere.
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

export default OurStory;
