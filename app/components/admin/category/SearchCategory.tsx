"use client";
import React, { useState } from "react";
import { ModalCategory } from "./ModalCategory";

type propsSearch = {
  setQuery: (value: string) => void;
};

export const SearchCategory: React.FC<propsSearch> = ({ setQuery }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className=" w-full flex justify-between items-center gap-2 p-2">
      <label className="input w-80">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          required
          placeholder="Search"
        />
      </label>
      <button
        className=" btn bg-rose-500 text-white text-base"
        onClick={() => setIsOpen(true)}>
        + Room
      </button>
      <ModalCategory isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
