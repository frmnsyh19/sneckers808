"use client";

import { useDiscoverProduct } from "@/libs/service/useDiscoverProduct";
import { useAppSelector } from "@/store/store";
import React from "react";
import { SkeletonComponent } from "../SkeletonComponent";
import Link from "next/link";
import { formatPrice } from "@/libs/helper/FormatPrice.";

type Products = {
  produkname: string;
  produkid: string;
  category: {
    categoryname: string;
  };
  price: number;
  gallery: string[];
};

export const DiscoverProduct = () => {
  const { query, sort, category } = useAppSelector((state) => state.discover);

  const { data: product, isLoading } = useDiscoverProduct({
    query,
    sort,
    category,
  });

  if (isLoading) {
    return <SkeletonComponent rows={4} />;
  }

  return (
    <>
      <div className="w-full justify-center items-center flex gap-3 flex-wrap">
        {product
          ? product.map((items: Products, i: number) => {
              return (
                <Link
                  href={`/product/${items.produkid}`}
                  key={i}
                  className=" w-48  lg:w-[17rem] shadow-2xl rounded-2xl flex flex-col">
                  <div className=" w-full">
                    <img src={items.gallery[0]} alt="" />
                  </div>
                  <div className=" w-full flex flex-col p-3">
                    <p className="text-lg font-semibold">{items.produkname}</p>
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
    </>
  );
};
