"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { constants } from "../app-constants";

export function OurServices() {
  return (
    <section id="services" className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography
            placeholder="test"
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            Our Services
          </Typography>
          <Typography
            placeholder="test"
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Whether you&aposre looking to revamp your home, redesign your
            office, or embark on a large-scale commercial project, Sparkling
            Star has the expertise and creativity to exceed your expectations.
            Our services include:
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-3 sm:grid-cols-2 ">
            {constants.services.map(({ name }) => (
              <h1 key={name}>{name}</h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
