"use client";

import Image from "next/image";
import React from "react";

import { Carousel, Typography } from "@material-tailwind/react";
import { constants } from "@/app/app-constants";

export function CarouselSlides() {
  return (
    <section className="">
      <div className="container mx-auto bg-black py-10 lg:px-16">
        <Carousel
          placeholder="test"
          transition={{ duration: 1 }}
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          autoplay={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {constants.testmonials.map((item, i) => (
            <div
              key={i}
              className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20"
            >
              <div className="col-span-3 flex flex-col items-start justify-center">
                <Typography
                  placeholder="test"
                  variant="lead"
                  color="white"
                  className="mb-5 text-xl font-normal "
                >
                  {item.title} <br />
                  {item.description}
                </Typography>
                <Typography
                  placeholder="test"
                  variant="small"
                  color="white"
                  className="font-medium uppercase"
                >
                  {item.name},{" "}
                  <span className="font-normal opacity-60">
                    {item.position} @ {item.company}.
                  </span>
                </Typography>
              </div>
              <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
                <Image
                  width={256}
                  height={256}
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-2/4 object-contain md:!w-2/3"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
