"use client";

import React from "react";

import { useAppSelector } from "@/store/store";
import { FilterProduct } from "./FilterProduct";
import { DiscoverProduct } from "./DiscoverProduct";

export const ClientDiscover = () => {
  // ambil redux props discover

  const { query } = useAppSelector((state) => state.discover);

  return (
    <>
      <div className=" lg:w-[90%] w-full flex flex-col gap-2 lg:gap-3 justify-center items-center p-1 lg:p-3">
        {/* <SearchDiscover setQuery={setQuery} /> */}
        <main className=" w-full flex justify-center items-center ">
          <div className=" w-full lg:h-[30rem] flex justify-center items-center">
            <img src="/bgdiscover.png" className=" w-full h-full" alt="" />
          </div>
        </main>
        <div className="w-full p-3 lg:p-5 flex justify-start">
          <p className="text-lg lg:text-2xl font-bold">
            Pencarian {`"${query}"`}
          </p>
        </div>
        <div className=" w-full flex flex-col lg:flex-row lg:gap-3">
          <FilterProduct />
          <DiscoverProduct />
        </div>
      </div>
    </>
  );
};
