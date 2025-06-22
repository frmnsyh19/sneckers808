"use client";

import { formatPrice } from "@/libs/helper/FormatPrice.";
import { useGetOurProduct } from "@/libs/service/home/useGetOurProduct";
import { useGetCategory } from "@/libs/service/useGetCategory";
import Link from "next/link";
import React, { useState } from "react";

interface Category {
  categoryname: string;
  id: number;
}

type Products = {
  produkname: string;
  produkid: string;
  category: {
    categoryname: string;
  };
  price: number;
  gallery: string[];
};

export const OurProduct = () => {
  const [isCategory, setIsCategory] = useState<number | string>("all");
  const [sort, setSort] = useState<string>("");

  const { data } = useGetCategory();

  const { data: product } = useGetOurProduct({ category: isCategory, sort });

  const handleChange = (id: number | string) => {
    setIsCategory(id);
  };

  return (
    <div className="w-full flex justify-center items-center mt-14 p-2">
      <div className=" w-full lg:w-[90%]  flex flex-col gap-3">
        <div className="w-full">
          <p className="text-start uppercase text-4xl font-bold">Our product</p>
        </div>
        <div className="w-full flex lg:flex-row lg:gap-0 gap-2 flex-col justify-start lg:justify-between lg:items-center">
          <div className="category flex justify-start gap-2 lg:gap-4">
            <div
              className={`"cursor-pointer p-2 w-20 lg:w-28 rounded-full hover:bg-slate-200 ${
                isCategory === "all" ? "bg-slate-800 text-white" : ""
              }`}
              onClick={() => handleChange("all")}>
              <p className="text-center capitalize text-base lg:text-lg">all</p>
            </div>
            {data ? (
              data.map((item: Category) => (
                <div
                  key={item.id}
                  className={`cursor-pointer p-2 w-24 lg:w-28 rounded-full hover:bg-slate-200 ${
                    isCategory === item.id ? "bg-slate-800 text-white" : ""
                  }`}
                  onClick={() => handleChange(item.id)}>
                  <p className="text-center capitalize text-base lg:text-lg">
                    {item.categoryname}
                  </p>
                </div>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </div>
          <div className="lg:w-fit w-full flex justify-end">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="select select-bordered rounded-full lg:w-fit w-32">
              <option value="">Sort By</option>
              <option value="new">Newest</option>
              <option value="lastes">Oldest</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <div className="w-full justify-start lg:justify-center items-center flex lg:gap-2 gap-2 flex-wrap">
          {product
            ? product.datas.map((items: Products, i: number) => {
                return (
                  <Link
                    href={`/product/${items.produkid}`}
                    key={i}
                    className=" w-[47%] card lg:h-fit h-[18.2rem] justify-between lg:justify-start lg:w-[17rem] shadow-2xl  flex flex-col">
                    <div className=" w-full">
                      <img
                        src={items.gallery[0]}
                        className=" w-full rounded-2xl lg:h-full h-40"
                        alt=""
                      />
                    </div>
                    <div className=" w-full flex flex-col p-3">
                      <p className="text-lg font-semibold">
                        {items.produkname}
                      </p>
                      <p className=" text-lg text-gray-400">
                        {items.category.categoryname}
                      </p>
                      <p className=" text-lg font-semibold">
                        {formatPrice(items.price)}
                      </p>
                    </div>
                  </Link>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};
