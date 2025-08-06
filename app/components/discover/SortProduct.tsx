"use client";

import { addSetDiscoverProduct } from "@/features/DiscoverSliders";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const SortProduct = () => {
  const [filter, setFilter] = useState<string>("");

  const dispacth = useDispatch();

  useEffect(() => {
    if (filter) {
      dispacth(addSetDiscoverProduct({ sort: filter }));
    }
  }, [filter, dispacth]);
  return (
    <div className="p-1 w-full flex lg:justify-center justify-end lg:w-fit">
      <select
        className="select w-40"
        onChange={(e) => setFilter(e.target.value)}>
        <option disabled={true}>Sort</option>
        <option value="new">Newlest</option>
        <option value="old">Oldlest</option>
        <option value="high">High Price</option>
        <option value="low">Low Price</option>
      </select>
    </div>
  );
};
