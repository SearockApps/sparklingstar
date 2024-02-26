"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Constants } from "../Constants";

export function OurVision() {
  return (
    <section className="py-28">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2 px-8">
          <Typography placeholder={Constants.ourVisionTitle} variant="h2" color="blue-gray" className="mb-4">{Constants.ourVisionTitle}</Typography>
          <Typography placeholder="test"
            variant="lead"
            className="mb-5 px-4 text-left lg:px-0"
          >
            {Constants.ourVision}
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
