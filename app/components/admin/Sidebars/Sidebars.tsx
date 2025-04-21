"use client";

import React from "react";

export const Sidebars = () => {
  return (
    <>
      <div className=" w-[20rem] bg-slate-100 flex-col gap-2 lg:flex hidden p-3 shadow-xl h-full">
        <div className=" w-full flex justify-center items-center">
          <p className=" text-rose-500 font-bold text-2xl uppercase ">Hotels</p>
        </div>
        <ul className="menu  flex flex-col gap-2 z-50 text-base-content min-h-full w-full p-2">
          <li className="p-1 border-b border-b-gray-300">
            <a href="" className="  text-lg">
              Dashboard
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-300">
            <a className=" text-lg" href="/tentangkami">
              Reservation
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-300">
            <a className=" text-lg" href="/tentangkami">
              Room
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-300">
            <a className=" text-lg" href="/gallery">
              Customer
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-300">
            <a className=" text-lg" href="/kontak">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
