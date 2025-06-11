import React from "react";
import { Navbar } from "../components/navbars/Navbar";
import { ItemsCart } from "../components/cart/ItemsCart";
import { SummaryCart } from "../components/cart/SummaryCart";

const page = () => {
  return (
    <div
      className={` w-full bg-slate-50 flex-col flex justify-center items-center`}>
      <Navbar />
      <div className="w-full flex-col mt-8 lg:w-11/12 justify-center items-center p-2 flex gap-2">
        <div className="w-full justify-center lg:flex-row flex-col flex gap-4 p-1">
          <ItemsCart />
          <SummaryCart />
        </div>
      </div>
    </div>
  );
};

export default page;
