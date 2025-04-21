"use client";

import React from "react";

type datas = {
  image: string;
  user: {
    email: string;
    name: string;
  };
};

export const Dawer = ({ user }: { user: datas }) => {
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
          <div className=" w-full flex justify-start items-center p-2">
            <div className=" flex flex-row gap-3 items-center justify-start">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.image} />
                </div>
              </div>
              <div className=" flex flex-col">
                <p className=" text-base text-slate-200">{user?.user?.name}</p>
                <p className=" text-base text-gray-500">{user?.user?.email}</p>
              </div>
            </div>
          </div>
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
          {user ? (
            <>
              <li className="p-1 border-b border-b-gray-500">
                <a className="text-slate-200 text-lg" href="/kontak">
                  Profile
                </a>
              </li>
              <li className="p-1 border-b border-b-gray-500">
                <a className="text-slate-200 text-lg" href="/kontak">
                  Logout
                </a>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};
