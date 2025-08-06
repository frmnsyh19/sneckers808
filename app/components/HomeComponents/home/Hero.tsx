import React from "react";
import { Crausel } from "./Crausel";

export const Hero = () => {
  return (
    <div
      className="hero h-[30rem] lg:h-[32rem] w-full"
      style={{
        backgroundImage: "url('/bgheader.jpg')",
      }}>
      <div className="hero-overlay  lg:h-[32rem]"></div>
      <div className="hero-content h-full flex justify-start items-start  flex-col gap-2 text-neutral-content text-center">
        <div className=" lg:w-[40rem] lg:mt-10 mt-4">
          <h1 className="mb-5 text-5xl lg:text-6xl font-bold">
            Design & High Quality
          </h1>
          <p className="mb-5 text-gray-400 text-center">
            These sneakers feature exceptional design and top-quality
            craftsmanship, offering both comfort and style with every step.
          </p>
          <div className=" w-full justify-center items-center flex gap-2">
            <button className=" btn bg-lime-600 border-none text-white">
              Get Started
            </button>
            <button className="btn btn-outline">Exprole More</button>
          </div>
        </div>
        <Crausel />
      </div>
    </div>
  );
};
