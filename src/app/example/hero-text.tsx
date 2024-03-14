"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { constants } from "../app-constants";

export function HeroText() {
  return (
    <section id="about" className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-2 lg:pl-24">
          <Typography
            placeholder="test"
            variant="h1"
            color="blue-gray"
            className="mb-4"
          >
            Welcome to Sparkling Star
          </Typography>
          <Typography
            placeholder="test"
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            We are Interior Design & Fit-out company, passionate about creating
            exceptional spaces that inspire and delight. With a commitment to
            design excellence and unparalleled customer service, we transform
            houses into homes and commercial spaces into captivating
            environments.
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

export default HeroText;
