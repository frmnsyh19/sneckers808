"use client";

import React from "react";

export const Dawer = () => {
  return (
    <div className="drawer z-10 lg:hidden" data-theme="dark">
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
        <ul className="menu bg-slate-800 flex flex-col gap-2 z-50 text-base-content min-h-full w-80 p-4">
          <li className="p-1 border-b border-b-gray-500">
            <a href="" className=" text-slate-200 text-lg">
              Home
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-500">
            <a className="text-slate-200 text-lg" href="/tentangkami">
              About
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-500">
            <a className="text-slate-200 text-lg" href="/gallery">
              Running
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-500">
            <a className="text-slate-200 text-lg" href="/artikels">
              Sneckers
            </a>
          </li>
          <li className="p-1 border-b border-b-gray-500">
            <a className="text-slate-200 text-lg" href="/kontak">
              Formal
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
