"use client";

import { useGetCategory } from "@/libs/service/useGetCategory";

import React, { useEffect, useState } from "react";
import { CardOurProduct } from "./CardOurProduct";
import { FilterOurProduct } from "./FilterOurProduct";
import { useGetProduct } from "@/libs/service/useGetProduct";

interface Category {
  categoryname: string;
  id: number;
}

interface Products {
  id: number;
  produkid: string;
  produkname: string;
  price: number;
  createdAt: Date;
  category: Category;
  gallery: string[];
  deskripsi: string;
}

export const OurProduct = () => {
  // state selectedByCategory
  const [selectedCategory, setSelectedCategory] = useState<number | string>(
    "all"
  );

  const [datas, setDatas] = useState<Products[]>([]);
  const [sort, setSort] = useState<string>("");

  const { data: categories } = useGetCategory();

  const { data: product } = useGetProduct();

  useEffect(() => {
    if (!product) return;

    let result = [...product];

    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((items) => items.category.id === selectedCategory);
    }

    if (sort) {
      result.sort((a, b) => {
        switch (sort) {
          case "new":
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          case "oldest":
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          case "high":
            return b.price - a.price;
          case "low":
            return a.price - b.price;
          default:
            return 0;
        }
      });
    }

    setDatas(result);
  }, [product, sort, selectedCategory]);

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
        <CardOurProduct product={datas} />
      </div>
    </div>
  );
};
