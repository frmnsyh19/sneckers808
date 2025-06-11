"use client";

import { addSetDiscoverProduct } from "@/features/DiscoverSliders";
import { useGetCategory } from "@/libs/service/useGetCategory";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type CateType = {
  categoryname: string;
  id: number;
};

export const FilterProduct = () => {
  const [checkedCategory, setCheckedCategory] = useState<string | null>("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (checkedCategory) {
      dispatch(addSetDiscoverProduct({ category: checkedCategory }));
    }
  }, [dispatch, checkedCategory]);

  const { data: category } = useGetCategory();

  const handleCheckedCategory = (name: string | null) => {
    setCheckedCategory((prev) => (prev == name ? null : name));
  };

  return (
    <div className=" lg:w-64  p-4 h-fit rounded-2xl shadow-2xl w-full overflow-x-scroll lg:overflow-auto flex-row lg:flex-col">
      <div className=" w-full flex flex-col gap-3">
        <p className=" text-lg font-semibold">By Category</p>
        <div className=" w-full flex flex-col gap-4">
          <label className="flex gap-1 cursor-pointer">
            <input
              type="checkbox"
              className="checkbox"
              checked={checkedCategory === null}
              onChange={() => handleCheckedCategory(null)}
            />
            <span className="text-base capitalize">All Items</span>
          </label>
          {category
            ? category.map((cate: CateType) => {
                return (
                  <label key={cate.id} className="flex gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={checkedCategory === cate.categoryname}
                      onChange={() => handleCheckedCategory(cate.categoryname)}
                    />
                    <span className="text-base capitalize">
                      {cate.categoryname}
                    </span>
                  </label>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};
