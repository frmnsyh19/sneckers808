"use client";

import React from "react";

export const DawerAdmin = () => {
  return (
    <div className="drawer lg:hidden bg-slate-100">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu bg-slate-100  flex flex-col gap-2 z-50 text-base-content min-h-full w-80 p-4">
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
    </div>
  );
};
