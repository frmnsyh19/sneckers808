import React from "react";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineMonitorHeart } from "react-icons/md";
export const HeaderColTwo = () => {
  return (
    <div className=" w-[45%] flex flex-row">
      <div className=" w-full flex justify-center items-center">
        <img src="/header/doktor2.png" className="" alt="" />
      </div>
      <div className=" w-2xs absolute h-[19rem] top-72 left-[58rem]  flex -700 flex-col justify-between">
        <div className="w-full flex justify-end">
          <div className=" w-[11.5rem] bg-white rounded flex flex-col gap-2 justify-center p-4">
            <FaUsers className=" text-3xl text-green-500" />
            <div className=" w-full flex flex-col gap-1">
              <p className=" text-base text-gray-400">Patients/years</p>
              <p className=" text-2xl font-bold">50.000+</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start ">
          <div className=" w-[11.5rem] bg-white rounded flex flex-col gap-2 justify-center p-4">
            <MdOutlineMonitorHeart className=" text-3xl text-green-500" />
            <div className=" w-full flex flex-col gap-1">
              <p className=" text-base text-gray-400">Healing Percentage</p>
              <p className=" text-2xl font-bold">92,5%+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
