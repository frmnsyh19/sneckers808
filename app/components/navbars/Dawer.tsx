"use client";

import React from "react";

export const Dawer = () => {
  return (
    <div className="drawer z-10 lg:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  bg-white">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-circle btn-ghost text-slate-800 drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{" "}
          </svg>
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu bg-slate-100 flex flex-col gap-2 z-50 text-base-content min-h-full w-80 p-4">
          <li className="p-1 border-b border-b-gray-500">
            <a href="" className=" text-lime-600 font-semibold text-lg">
              Home
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-500">
            <a
              className="text-lime-600 font-semibold text-lg"
              href="/tentangkami">
              About
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-500">
            <a className="text-lime-600 font-semibold text-lg" href="/gallery">
              Running
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-500">
            <a className="text-lime-600 font-semibold text-lg" href="/artikels">
              Sneckers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
