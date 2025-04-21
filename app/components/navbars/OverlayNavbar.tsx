"use client";

import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useAppSelector } from "@/store/store";
import { useFetchProductNavbar } from "@/libs/service/useFetchProductNavbar";
type PropsSearch = {
  setIsSearch: (value: boolean) => void;
  isSearch: boolean;
};

type Product = {
  produkname: string;
  produkid: string;
  gallery: string[];
};

export const OverlayNavbar: React.FC<PropsSearch> = ({
  setIsSearch,
  isSearch,
}) => {
  const querys = useAppSelector((state) => state.discover);

  const { data, isLoading } = useFetchProductNavbar(querys.query);

  return (
    <>
      <AnimatePresence>
        {isSearch && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={` w-full flex top-[4.2rem] flex-col fixed`}>
            <div className=" w-full flex flex-col gap-2 h-full bg-base-100 p-5">
              <div className=" w-full flex flex-row gap-2 p-4">
                <p className=" text-lg">Cari</p>
                <p className=" text-lg">{`"${
                  querys.search ? querys.search : ""
                }"`}</p>
              </div>
              <div className=" w-full flex justify-center lg:flex-row flex-col items-center gap-4">
                <div className="flex w-full lg:w-[93%] lg:flex-row flex-col justify-evenly p-1">
                  {isLoading ? (
                    <div className=" w-full flex justify-center items-center gap-3">
                      <span className="loading loading-ring loading-xl"></span>
                      <span className="loading loading-ring loading-xl"></span>
                      <span className="loading loading-ring loading-xl"></span>
                    </div>
                  ) : data ? (
                    data.map((product: Product) => (
                      <Link
                        key={product.produkid}
                        href={`/${product.produkid}`}>
                        <div className="lg:w-48 items-center w-full flex-row  flex lg:flex-col gap-4 lg:gap-2 cursor-pointer">
                          <img
                            src={product.gallery?.[0] || "/placeholder.jpg"}
                            className=" w-16 lg:w-full lg:h-32 object-cover"
                            alt={product.produkname}
                          />
                          <span className="text-center text-slate-800 font-normal lg:font-bold text-base">
                            {product.produkname}
                          </span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-center text-slate-600">
                      No products found.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div
              className=" w-full h-96  "
              onClick={() => setIsSearch(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
