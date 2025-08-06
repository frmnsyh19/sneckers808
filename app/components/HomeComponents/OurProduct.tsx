"use client";

import { useGetOurProduct } from "@/libs/service/home/useGetOurProduct";
import { useGetCategory } from "@/libs/service/useGetCategory";

import React, { useState } from "react";
import { CardOurProduct } from "./CardOurProduct";
import { FilterOurProduct } from "./FilterOurProduct";

interface Category {
  categoryname: string;
  id: number;
}

export const OurProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | string>(
    "all"
  );
  const [sort, setSort] = useState<string>("");

  const { data: categories } = useGetCategory();
  const { data: product } = useGetOurProduct({
    category: selectedCategory,
    sort,
  });

  console.log("real category", categories);

  const handleChangeCategory = (id: number | string) => {
    setSelectedCategory(id);
  };

  if (!categories || !product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full flex justify-center items-center p-2">
      <div className="w-full lg:w-[90%] flex flex-col gap-3">
        <div className="w-full">
          <p className="text-start uppercase text-4xl font-bold">Our product</p>
        </div>
        <FilterOurProduct
          isCategory={selectedCategory}
          sort={sort}
          setIsCategory={handleChangeCategory}
          setSort={setSort}
          category={categories as Category[]}
        />
        <CardOurProduct product={product?.datas} />
      </div>
    </div>
  );
};
