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
    <div className=" w-full  flex justify-center items-center ">
      <div className=" absolute w-full lg:top-[22.3rem] top-[22rem] ">
        <div className=" w-full flex justify-center items-center">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            modules={[EffectFlip]}
            className="mySwiper w-[22rem] lg:w-[25rem] flex justify-center items-center lg:h-[19rem] h-[17rem] ">
            <SwiperSlide>
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/productheader/product1.png"
                  loading="lazy"
                  className=" w-[18rem] lg:w-[22rem] ms-4 "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/productheader/product2.png"
                  loading="lazy"
                  className=" w-[18rem] lg:w-[22rem] ms-4"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/productheader/product3.png"
                  loading="lazy"
                  className=" w-[18rem] lg:w-[22rem] ms-4"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
