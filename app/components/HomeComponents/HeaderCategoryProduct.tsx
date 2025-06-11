import React from "react";

export const HeaderCategoryProduct = () => {
  return (
    <div className=" w-full flex flex-col h-full lg:p-2 gap-2 justify-center items-center">
      <div className=" w-full lg:w-[90%] flex gap-10 lg:gap-3 lg:flex-row flex-col justify-center items-center">
        <div className=" w-full lg:w-[50%] flex flex-col gap-4">
          <img
            src="/headerrunning.jpg"
            className=" w-full h-[24rem] object-cover"
            alt=""
          />
          <div className=" w-full flex flex-col justify-center items-center ">
            <p className=" text-xl uppercase font-bold">Sneckers</p>
            <p className=" text-lg text-gray-400">
              Unleash your stride with comfort and bold style
            </p>
            <a
              href=""
              className=" text-lime-400 font-semibold mt-3 text-lg">{`Shop Now`}</a>
          </div>
        </div>
        <div className=" w-full lg:w-[50%] flex flex-col gap-4">
          <img
            src="/headersnekers.jpg"
            className=" w-full  object-cover h-[24rem]"
            alt=""
          />
          <div className=" w-full flex flex-col justify-center items-center ">
            <p className=" text-xl uppercase font-bold">Running</p>
            <p className=" text-lg text-gray-400 text-center">
              Feel the energy in every stride with lightweight running shoes.
            </p>
            <a
              href=""
              className=" text-lime-400 font-semibold mt-3 text-lg">{`Shop Now`}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
