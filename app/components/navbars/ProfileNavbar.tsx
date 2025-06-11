import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

export const ProfileNavbar = () => {
  return (
    <div className="dropdown dropdown-end lg:block hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar">
        <div className=" w-7 rounded-full">
          <FaRegUserCircle className=" text-2xl" />
        </div>
      </div>
    </div>
  );
};
