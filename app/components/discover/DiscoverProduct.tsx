"use client";

import React from "react";

import { Product } from "./Product";
import { SearchProduct } from "./SearchProduct";
import { SortProduct } from "./SortProduct";

export const DiscoverProduct = () => {
  return (
    <>
      <div className=" w-full flex flex-col gap-2 p-1">
        <div className=" w-full flex justify-between lg:flex-row flex-col items-center">
          <SearchProduct />
          <SortProduct />
        </div>
        <Product />
      </div>
    </>
  );
};
