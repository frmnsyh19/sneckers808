"use client";

import React, { useEffect, useState } from "react";

import { useAppSelector } from "@/store/store";
import { FilterProduct } from "./FilterProduct";
import { useDispatch } from "react-redux";
import { addSetDiscoverProduct } from "@/features/DiscoverSliders";
import { DiscoverProduct } from "./DiscoverProduct";

export const ClientDiscover = () => {
  const [sort, setSort] = useState<string>("");

  const discoverProps = useAppSelector((state) => state.discover);

  const dispatch = useDispatch();

  useEffect(() => {
    if (sort) {
      dispatch(addSetDiscoverProduct({ sort }));
    }
  }, [dispatch, sort]);

  console.log(discoverProps);

  return (
    <>
      <div className=" lg:w-[90%] w-full flex flex-col gap-5 lg:gap-24 justify-center items-center p-1 lg:p-3">
        {/* <SearchDiscover setQuery={setQuery} /> */}
        <div className=" w-full flex flex-col gap-3">
          <div className=" w-full flex justify-between items-center">
            <p className=" text-xl font-bold">
              Pencarian Terakhir{" "}
              {`"${discoverProps.query ? discoverProps.query : ""}"`}
            </p>
            <select
              defaultValue="Pick a color"
              className="select lg:flex hidden"
              onChange={(e) => setSort(e.target.value)}>
              <option disabled={true}>Sort</option>
              <option value="new">Newlest</option>
              <option value="old">Oldlest</option>
              <option value="high">High Price</option>
              <option value="low">Low Price</option>
            </select>
          </div>
          <div className=" w-full flex  flex-col gap-4 lg:gap-2 lg:flex-row mt-4 lg:mt-11 ">
            <FilterProduct />
            <div className=" w-full flex lg:hidden">
              <select
                defaultValue="Pick a color"
                className="select lg:hidden w-full"
                onChange={(e) => setSort(e.target.value)}>
                <option disabled={true}>Sort</option>
                <option value="new">Newlest</option>
                <option value="old">Oldlest</option>
                <option value="high">High Price</option>
                <option value="low">Low Price</option>
              </select>
            </div>
            <DiscoverProduct />
          </div>
        </div>
      </div>
    </>
  );
};
