"use client";

import { formatPrice } from "@/libs/helper/FormatPrice.";
import Link from "next/link";
import React from "react";

type Products = {
  produkname: string;
  produkid: string;
  category: {
    categoryname: string;
  };
  price: number;
  gallery: string[];
};

export const CardOurProduct = ({ product }: { product: Products[] }) => {
  return (
    <div className="w-full justify-start mt-2 lg:justify-center items-center flex lg:gap-2 gap-2 flex-wrap">
      {product
        ? product.map((items: Products, i: number) => {
            return (
              <Link
                href={`/product/${items.produkid}`}
                key={i}
                className=" w-[48%] lg:h-fit h-[18.2rem] justify-between lg:justify-start lg:w-[17rem] shadow-2xl  flex flex-col">
                <div className=" w-full">
                  <img
                    src={items.gallery[0]}
                    className=" w-full  lg:h-full h-40"
                    alt=""
                  />
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
  );
};
