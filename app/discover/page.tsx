"use client";

import React from "react";
import { Navbar } from "../components/navbars/Navbar";
import { ClientDiscover } from "../components/discover/ClientDiscover";

const page = () => {
  return (
    <div className=" w-full flex flex-col gap-2">
      <Navbar />
      <div className=" w-full flex justify-center items-center">
        <ClientDiscover />
      </div>
    </div>
  );
};

export default page;
