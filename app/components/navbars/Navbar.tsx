"use client";

// note untuk code yang lebih reuseballe coba gunakan redux

import React, { useState } from "react";
import { Dawer } from "./Dawer";
import { MenuBars } from "./MenuBars";
import { CartNavbar } from "./CartNavbar";
import { ProfileNavbar } from "./ProfileNavbar";
import { SearchNavbar } from "./SearchNavbar";
import { OverlayNavbar } from "./OverlayNavbar";
import { ToastContainer } from "react-toastify";
import { useGetProfile } from "@/libs/service/useGetProfile";

export const Navbar = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const { data } = useGetProfile();

  return (
    <>
      <div className=" w-full bg-neutral-900 flex flex-col text-white justify-center items-center">
        <ToastContainer />
        <div className="w-full lg:w-[95%] navbar bg-neutral-900 shadow-sm">
          <div className="navbar-start flex gap-2">
            <Dawer user={data} />
            <a className="btn btn-ghost text-2xl lg:flex justify-center items-center text-center hidden">
              Sneckers808
            </a>
          </div>
          <div className={`navbar-center`}>
            <a
              className={`btn btn-ghost text-xl lg:hidden  ${
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
            <div className={`flex ${isSearch ? "hidden" : ""}`}>
              <ProfileNavbar user={data} />
            </div>
          </div>
        </div>
        {/* overlay */}
        <OverlayNavbar setIsSearch={setIsSearch} isSearch={isSearch} />
      </div>
    </>
  );
};
