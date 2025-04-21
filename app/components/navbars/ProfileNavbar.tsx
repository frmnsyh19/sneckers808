import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

type datas = {
  image: string;
};

export const ProfileNavbar = ({ user }: { user: datas }) => {
  return (
    <div className="dropdown dropdown-end lg:block hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar">
        <div className=" w-7 rounded-full">
          {user ? (
            <div className="avatar">
              <div className="w-full rounded-full">
                <img src={user?.image} />
              </div>
            </div>
          ) : (
            <FaRegUserCircle className=" text-2xl" />
          )}
        </div>
      </div>
      {user && (
        <>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
