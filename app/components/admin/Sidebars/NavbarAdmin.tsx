"use client";

import React from "react";
import { DawerAdmin } from "./DawerAdmin";

export const NavbarAdmin = () => {
  return (
    <div className="navbar bg-slate-100 shadow-sm lg:hidden flex">
      <div className="navbar-start">
        <DawerAdmin />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-rose-500 text-xl">Hotels</a>
      </div>
      <div className="navbar-end">
        <p className=" text-lg font-semibold">Firman</p>
      </div>
    </div>
  );
};
