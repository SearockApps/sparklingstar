"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Constants } from "../Constants";

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
    <h1>{Constants.ourMissionTitle}</h1>
    <Typography
      variant="lead"
      className="mb-5 text-left lg:px-0  "
    >
      {Constants.ourMission}
    </Typography>
  </div>
</div>
</section>
  );
}

export default OurMission;
