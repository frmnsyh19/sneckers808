"use client";

import React from "react";

type Category = {
  categoryname: string;
  id: number;
};

type propsFilter = {
  isCategory: number | string;
  sort: string;
  setIsCategory: (id: number | string) => void;
  setSort: (sort: string) => void;
  category: Category[] | undefined;
};

export const FilterOurProduct = ({
  isCategory,
  sort,
  setIsCategory,
  setSort,
  category,
}: propsFilter) => {
  console.log(category, "isCategory");

  const handleChangeCategory = (id: number | string) => {
    setIsCategory(id);
  };

  return (
    <div className="w-full flex lg:flex-row lg:gap-0 gap-2 flex-row justify-between lg:justify-between lg:items-center">
      <div className="category overflow-auto flex justify-start gap-2 lg:gap-4">
        <div
          className={`"cursor-pointer p-2 w-20 lg:w-28 rounded-full hover:bg-slate-200 ${
            isCategory === "all" ? "bg-slate-800 text-white" : ""
          }`}
          onClick={() => handleChangeCategory("all")}>
          <p className="text-center capitalize text-base lg:text-lg">all</p>
        </div>
        {category ? (
          category.map((item: Category) => (
            <div
              key={item.id}
              className={`cursor-pointer p-2 w-24 lg:w-28 rounded-full hover:bg-slate-200 ${
                isCategory === item.id ? "bg-slate-800 text-white" : ""
              }`}
              onClick={() => handleChangeCategory(item.id)}>
              <p className="text-center capitalize text-base lg:text-lg">
                {item.categoryname}
              </p>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
      <div className="w-fit flex justify-end">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered rounded-full lg:w-fit w-24">
          <option value="">Sort By</option>
          <option value="new">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
};
