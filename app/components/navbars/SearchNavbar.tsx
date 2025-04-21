"use client";

import { addSetDiscoverProduct } from "@/features/DiscoverSliders";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type PropsSearch = {
  setIsSearch: (value: boolean) => void;
  isSearch: boolean;
};

export const SearchNavbar: React.FC<PropsSearch> = ({
  setIsSearch,
  isSearch,
}) => {
  const [querys, setQuerys] = useState<string>("");

  const dispacth = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (!isSearch) {
      dispacth(addSetDiscoverProduct({ search: "" }));
    }
  }, [isSearch, dispacth]);

  useEffect(() => {
    if (querys) {
      dispacth(addSetDiscoverProduct({ query: querys, search: querys }));
    }
  }, [querys, dispacth]);

  const handleLinkPageDiscover = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/discover");
  };

  return (
    <>
      <button
        className={`btn btn-ghost btn-circle ${isSearch ? "hidden" : "flex"}`}
        onClick={() => setIsSearch(true)}>
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />{" "}
        </svg>
      </button>
      {/* inputSearch */}
      <form onSubmit={handleLinkPageDiscover}>
        <label
          className={`input input-bordered flex w-full rounded-md items-center gap-2 ${
            !isSearch ? "hidden" : ""
          }`}>
          <input
            type="text"
            className={`grow ${
              isSearch ? " w-[13rem] lg:w-[22rem]" : "w-full"
            }`}
            placeholder="Search"
            onFocus={() => setIsSearch(true)}
            onBlur={() => setQuerys("")}
            value={querys}
            onChange={(e) => setQuerys(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button className=" btn btn-primary hidden" type="submit">
          submit
        </button>
      </form>
    </>
  );
};
