"use client";

import React from "react";

export const TopBrands = () => {
  return (
    <>
      <div className=" w-full flex flex-col h-[17rem] lg:h-[20rem] justify-center items-center">
        <div className=" w-full lg:w-10/12 flex flex-col gap-2">
          <p className=" text-2xl font-bold text-center">Top Brands</p>
          <p className=" text-base text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
            quo?
          </p>
          <div className=" w-full flex justify-center gap-2 items-center">
            <img src="/brands/nike.png" className=" w-14 lg:w-28 " alt="" />
            <img src="/brands/nb.png" className=" w-14 lg:w-28 " alt="" />
            <img src="/brands/adidas.png" className=" w-14 lg:w-28 " alt="" />
            <img src="/brands/ortus.jpg" className=" w-14 lg:w-28 " alt="" />
            <img src="/brands/puma.png" className=" w-14 lg:w-28 " alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
