"use client";

import { useGetProduct } from "@/libs/service/useGetProduct";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

type ProductCrausel = {
  gallery: string[];
};

export const Crausel = () => {
  const { data: product } = useGetProduct();

  return (
    <div className=" absolute lg:top-80 top-[21rem] left-[4rem] lg:left-[27rem]">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper w-[22rem] lg:w-[25rem] lg:h-[19rem] h-[17rem] lg:ms-5 ">
        {product
          ? product.map((item: ProductCrausel, i: number) => {
              return (
                <SwiperSlide key={i}>
                  <img
                    src={item.gallery[0]}
                    className=" w-[20rem] lg:w-[24rem]  lg:ms-0"
                  />
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </div>
  );
};
