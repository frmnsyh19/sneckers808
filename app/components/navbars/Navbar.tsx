"use client";

// note untuk code yang lebih reuseballe coba gunakan redux

import React, { useState } from "react";
import { Dawer } from "./Dawer";
import { MenuBars } from "./MenuBars";
import { CartNavbar } from "./CartNavbar";

import { SearchNavbar } from "./SearchNavbar";
import { OverlayNavbar } from "./OverlayNavbar";
import { ToastContainer } from "react-toastify";

export const Navbar = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <>
      <div
        className={` w-full flex justify-center ${
          isSearch ? "fixed z-50 top-0 left-0 bg-white" : ""
        } shadow-md items-center `}>
        <ToastContainer />
        <div className="w-full lg:w-[95%] navbar ">
          <div className="navbar-start flex gap-2">
            <Dawer />
            <a className="btn btn-ghost text-2xl lg:flex justify-center items-center text-center hidden">
              Sneckers808
            </a>
          </div>
          <div className={`navbar-center`}>
            <a
              className={`btn text-white btn-ghost text-xl lg:hidden  ${
                isSearch ? "hidden" : ""
              }`}>
              Sneckers808
            </a>
            <MenuBars />
          </div>
          <div className="navbar-end flex flex-row">
            <SearchNavbar setIsSearch={setIsSearch} isSearch={isSearch} />
            <div className={`flex ${isSearch ? "hidden" : ""}`}>
              <CartNavbar />
            </div>
          </div>
        </div>
        {/* overlay */}
        <OverlayNavbar setIsSearch={setIsSearch} isSearch={isSearch} />
      </div>
    </>
  );
};
