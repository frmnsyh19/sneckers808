import React from "react";
import { Sidebars } from "../components/admin/Sidebars/Sidebars";
import { NavbarAdmin } from "../components/admin/Sidebars/NavbarAdmin";
import { ToastContainer } from "react-toastify";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-theme="light"
      className="w-full bg-slate-200 flex lg:flex-row flex-col gap-3 lg:h-screen overflow-hidden ">
      <NavbarAdmin />
      <Sidebars />
      <ToastContainer />
      {children}
    </div>
  );
}
