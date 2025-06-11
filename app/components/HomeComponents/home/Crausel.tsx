"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip } from "swiper/modules";

export const Crausel = () => {
  return (
    <div className=" absolute lg:top-[21rem] top-[22rem] left-[5rem] lg:left-[28rem]">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        modules={[EffectFlip]}
        className="mySwiper w-[22rem] lg:w-[25rem] lg:h-[19rem] h-[17rem] lg:ms-5 ">
        <SwiperSlide>
          <img
            src="/productheader/product1.png"
            loading="lazy"
            className=" w-[20rem] lg:w-[24rem]  lg:ms-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/productheader/product2.png"
            loading="lazy"
            className=" w-[20rem] lg:w-[24rem]  lg:ms-0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/productheader/product3.png"
            loading="lazy"
            className=" w-[20rem] lg:w-[24rem]  lg:ms-0"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
