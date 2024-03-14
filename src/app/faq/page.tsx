"use client";
import Data from "./data.json";
import { useState } from "react";
import Image from "next/image";

const Content = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    active === index ? setActive(null) : setActive(index);
  };

  return (
    <main className="bg-white rounded-3xl min-h-[535px] flex m-0 w-[330px] flex-col items-center md:flex-row md:justify-around md:w-[930px] md:min-h-[500px]">
      <div className="md:w-[50%] md:min-h-[535px]">
        <h1 className="text-darkBlue font-bold text-center text-4xl relative top-[-2.75rem] md:text-left md:top-[5rem]">
          FAQ
        </h1>
        <div className="flex flex-col gap-4 relative top-[-1.5rem] mb-[2.5rem] md:top-[6rem] md:mb-0">
          {Data.map((item, index) => {
            return (
              <div key={index} className="m-0 p-0 w-[260px] md:w-[350px]">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center gap-3 my-2">
                    <p
                      className={
                        active === index
                          ? "text-darkBlue text-xs font-bold cursor-pointer"
                          : "text-DarkGrayishBlue text-xs cursor-pointer"
                      }
                      onClick={() => handleToggle(index)}
                    >
                      {item.title}
                    </p>

                    <Image
                      src="icon-arrow-down.svg"
                      alt="arrow-icon"
                      width={10}
                      height={5}
                      onClick={() => handleToggle(index)}
                      className={
                        active === index
                          ? "cursor-pointer w-[10px] h-[8px] rotate-180"
                          : "cursor-pointer w-[10px] h-[8px]"
                      }
                    />
                  </div>
                  <hr
                    className={
                      active === index
                        ? "border-b-1 border-LightGrayishBlue relative top-[45px]"
                        : "border-b-1 border-LightGrayishBlue relative top-[8px]"
                    }
                  ></hr>
                </div>
                <p
                  onClick={() => handleToggle(index)}
                  className={
                    active === index
                      ? "text-DarkGrayishBlue text-[0.6rem] w-[15rem] md:w-[20rem] p-0 m-0 cursor-pointer"
                      : "invisible max-h-0"
                  }
                >
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Content;
