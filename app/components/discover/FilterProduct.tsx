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
  const [checkedCategory, setCheckedCategory] = useState<
    string | null | number
  >("");

  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize(); // cek saat komponen pertama kali mount
    window.addEventListener("resize", handleResize); // update saat resize

    return () => {
      window.removeEventListener("resize", handleResize); // cleanup
    };
  }, []); // hanya jalan sekali saat mount

  const dispatch = useDispatch();

  useEffect(() => {
    if (checkedCategory) {
      dispatch(addSetDiscoverProduct({ category: checkedCategory }));
    }
  }, [dispatch, checkedCategory]);

  const { data: category } = useGetCategory();

  const handleCheckedCategory = (name: string | null | number) => {
    setCheckedCategory(name);
  };

  return (
    <div className=" lg:w-[18rem] p-2 lg:p-4 h-fit    w-full  lg:overflow-auto flex-row lg:flex-col">
      <div className=" w-full flex overflow-x-auto flex-row lg:flex-col gap-2">
        <div className=" w-full p-2 hidden lg:block">
          <p className=" text-xl font-bold">Categories</p>
        </div>
        <div
          onClick={() => handleCheckedCategory("all")}
          className={`${
            mobile
              ? `btn btn-sm rounded-3xl ${
                  checkedCategory === "all"
                    ? "bg-lime-400 text-white"
                    : "bg-base-300"
                }`
              : `lg:w-full lg:p-1 lg:flex lg:items-center lg:gap-1 lg:border-b lg:border-b-gray-200 ${
                  checkedCategory === "all"
                    ? "lg:border-l-5 lg:border-l-lime-400"
                    : ""
                }`
          }`}>
          <p className="text-base capitalize lg:block hidden">{`>`}</p>
          <p className="lg:text-lg text-base capitalize">All Items</p>
        </div>
        {category
          ? category.map((items: CateType, i: number) => {
              return (
                <div
                  onClick={() => handleCheckedCategory(items.id)}
                  className={`${
                    mobile
                      ? `btn btn-sm rounded-3xl ${
                          checkedCategory === items.id
                            ? "bg-lime-400 text-white"
                            : "bg-base-300"
                        }`
                      : `lg:w-full lg:p-1 lg:flex lg:items-center lg:gap-1 lg:border-b lg:border-b-gray-200 ${
                          checkedCategory === items.id
                            ? "lg:border-l-5 lg:border-l-lime-400"
                            : ""
                        }
`
                  }`}
                  key={i}>
                  <p className="text-base capitalize lg:block hidden">{`>`}</p>
                  <p className=" text-base lg:text-lg capitalize">
                    {items.categoryname}
                  </p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

// {
//   `btn btn-sm rounded-3xl bg-base-200 lg:w-full lg:p-1 lg:flex lg:items-center lg:gap-1 lg:border-b lg:border-b-gray-200 ${
//     checkedCategory === items.id
//       ? "lg:border-l-5 md:bg-orange-600 md:text-white lg:border-l-orange-600"
//       : ""
//   }`;
// }
