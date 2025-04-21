import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FiStar } from "react-icons/fi";
import { HeaderColTwo } from "./HeaderColTwo";
export const Header = () => {
  return (
    <div className=" w-full bg-green-100 lg:h-[40rem] flex justify-center items-center">
      <div className=" w-[90%] flex lg:flex-row flex-col justify-between items-center p-1 lg:p-4 gap-2">
        <div className=" w-full lg:w-[55%] flex flex-col gap-2 lg:p-2">
          <p className=" text-6xl leading-16">
            The <span className=" text-green-500">Ultimate</span> Choice for You
            Health and <span className=" text-green-500 ">Wellness</span>
          </p>
          <p className=" text-lg text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            corporis explicabo enim laudantium, delectus quibusdam vero
            blanditiis tempore repudiandae doloribus.
          </p>
          <div className=" w-full flex justify-start items-center mt-8 ">
            <div className=" w-full lg:w-[90%] flex flex-col gap-2 bg-slate-50">
              <div className=" w-full flex gap-2 p-2">
                <div className=" w-[50%] flex flex-col gap-2">
                  <div className=" w-full flex  items-center justify-start gap-2">
                    <CiCalendarDate className=" text-base" />
                    <p className=" text-base">Pick Date</p>
                  </div>
                  <input type="datetime-local" className="input w-full" />
                </div>
                <div className=" w-[50%] flex flex-col gap-2">
                  <div className=" w-full flex  items-center justify-start gap-2">
                    <FiStar className=" text-base" />
                    <p className=" text-base">Specialize</p>
                  </div>
                  <select defaultValue="Pick a color" className="select">
                    <option disabled={true}>Pick a color</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                  </select>
                </div>
              </div>
              <div className=" w-full flex p-2">
                <button className=" w-full btn bg-green-500 text-white rounded">
                  Check availability
                </button>
              </div>
            </div>
          </div>
        </div>
        <HeaderColTwo />
      </div>
    </div>
  );
};
