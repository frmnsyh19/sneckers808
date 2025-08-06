"use client";

import React, { useEffect, useState } from "react";
import { SkeletonComponent } from "../SkeletonComponent";
import { useAppSelector } from "@/store/store";
import Link from "next/link";
import { formatPrice } from "@/libs/helper/FormatPrice.";
import { useNewDiscoverProduct } from "@/libs/service/useNewDiscoverProduct";

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

export const Product = () => {
  const [datas, setDatas] = useState<Products[]>([]);

  const {
    default: defaults,
    query,
    category,
    sort,
  } = useAppSelector((state) => state.discover);

  const { data: product, isLoading } = useNewDiscoverProduct();

  useEffect(() => {
    if (!product) return;

    let result = [...product];

    // 🔍 Filter by query
    if (query) {
      result = result.filter((item) =>
        item.produkname.toLowerCase().includes(query.toLowerCase())
      );
    }

    // 🏷️ Filter by category
    if (category && category !== "all") {
      result = result.filter((item) => item.category.id === category);
    }

    // ↕️ Sort
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
  }, [product, query, category, sort]);

  if (isLoading) {
    return <SkeletonComponent rows={4} />;
  }

  return (
    <div
      className={`${
        defaults
          ? "w-full mt-8 justify-center items-center flex gap-2 lg:gap-3 flex-wrap"
          : "w-full mt-8 justify-center items-center flex flex-col gap-5"
      }`}>
      {datas.length > 0 ? (
        datas.map((items: Products, i: number) => (
          <Link
            href={`/product/${items.produkid}`}
            key={i}
            className={`${
              defaults
                ? "w-[48%] lg:h-fit h-[18.2rem] justify-between lg:justify-start lg:w-[17rem] shadow-2xl flex flex-col"
                : "w-full shadow border border-gray-200 h-64 flex flex-row gap-2 items-center justify-start"
            }`}>
            <div
              className={`${defaults ? "w-full" : "lg:w-72 w-40 p-1 h-full"}`}>
              <img
                src={items.gallery[0]}
                className={`${
                  defaults
                    ? "w-full lg:h-full h-40 object-cover"
                    : " lg:w-72 w-40 h-full"
                }`}
                alt={items.produkname}
              />
            </div>
            <div className="w-full flex flex-col p-3">
              <p className="text-lg font-semibold">{items.produkname}</p>
              <p className="text-lg text-gray-400">
                {items.category.categoryname}
              </p>
              <p className="text-lg font-semibold">
                {formatPrice(items.price)}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg py-6">
          Produk tidak ditemukan.
        </p>
      )}
    </div>
  );
};
