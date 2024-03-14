"use client";

import React from "react";
import { Gallery } from "next-gallery";
import { constants } from "../app-constants";

const images = [
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
  { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16 / 9 },
];

const widths = [500, 1000, 1600];
const ratios = [2.2, 4, 6, 8];

// const gallery = Constants.banners.map((item) => ({ src: item, aspect_ratio: 16/9 }));

export function ShowcaseGallery() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <Gallery {...{ images, widths, ratios }} />
      </div>
    </section>
  );
}

export default ShowcaseGallery;
