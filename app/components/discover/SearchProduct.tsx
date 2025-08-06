import {
  addSetDiscoverProduct,
  addSetModeLayouts,
} from "@/features/DiscoverSliders";
import React, { useEffect, useState } from "react";
import { RiLayout4Fill, RiLayoutGridFill } from "react-icons/ri";
import { useDispatch } from "react-redux";

export const SearchProduct = () => {
  const [searchProduct, setSearchProduct] = useState<string>("");

  const dispacth = useDispatch();

  useEffect(() => {
    if (searchProduct) {
      dispacth(addSetDiscoverProduct({ query: searchProduct }));
    }
  }, [dispacth, searchProduct]);

  const handleLayoutsMode = (mode: boolean) => {
    dispacth(addSetModeLayouts({ mode }));
  };

  return (
    <div className=" w-full lg:w-fit  justify-center items-center flex flex-row">
      <div
        className="p-1 lg:block hidden"
        onClick={() => handleLayoutsMode(false)}>
        <RiLayout4Fill className="text-3xl text-green-400" />
      </div>
      <div
        className="p-1 lg:block hidden"
        onClick={() => handleLayoutsMode(true)}>
        <RiLayoutGridFill className="text-3xl text-purple-600" />
      </div>
      <div className=" p-1 lg:w-fit w-full">
        <label className="input w-full md:w-[18rem]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearchProduct(e.target.value)}
            type="search"
            className=" w-full md:w-[18rem]"
            placeholder="Search"
          />
        </label>
      </div>
    </div>
  );
};
