"use client";

import { formatPrice } from "@/libs/helper/FormatPrice.";
import { useAppSelector } from "@/store/store";
import React from "react";
export const SummaryCart = () => {
  const Cart = useAppSelector((state) => state.CartReducer);

  return (
    <>
      <div className=" w-full lg:w-2/5 flex flex-col h-full gap-2 p-3 border shadow-lg">
        <div className=" w-full flex flex-col gap-2">
          <div className=" w-full p-2">
            <p className=" text-xl capitalize font-bold">Shopping Summary</p>
          </div>
          <div className=" w-full p-2 bg-base-200 flex justify-between items-center">
            <p className=" text-base">Total Product</p>
            <p className=" text-base">{Cart?.totalproduct}</p>
          </div>
          <div className=" w-full p-2 bg-base-200 flex justify-between items-center">
            <p className=" text-base">Tax</p>
            <p className=" text-base">{formatPrice(5000)}</p>
          </div>
          <div className=" w-full p-2 bg-base-200 flex justify-between items-center">
            <p className=" text-base">Subtotal</p>
            <p className=" text-base">{formatPrice(Cart?.totalprice + 5000)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
