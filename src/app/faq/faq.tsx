"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography
          placeholder="test"
          variant="h5"
          color="blue-gray"
          className="mb-2"
        >
          {title}
        </Typography>
        <Typography
          placeholder="test"
          className="mb-2 md:w-10/12 font-normal !text-gray-500"
        >
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function OurProcess() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography
        placeholder="test"
        variant="h2"
        className="text-center mb-2"
        color="blue-gray"
      >
        Our Design and build process
      </Typography>
      <Typography
        placeholder="test"
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Discover the unique advantages, benefits, and standout features that set
        our course apart from the rest.
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="React Fundamentals">
                Premium Quality
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="State and Props">
                Innovative Design
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={Cog6ToothIcon} title="Component Lifecycle">
                Technical Excellence
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={Cog6ToothIcon} title="Component Lifecycle">
                Client-Centric Approach
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={Cog6ToothIcon} title="Component Lifecycle">
                On time Delivery
              </Option>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
