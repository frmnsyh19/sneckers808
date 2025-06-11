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
  const [query, setQuery] = useState<string>("");

  const dispatch = useDispatch();
  const router = useRouter();

  // Clear query in Redux when search is closed
  useEffect(() => {
    if (!isSearch) {
      dispatch(addSetDiscoverProduct({ search: "" }));
    }
  }, [isSearch, dispatch]);

  // Optional: update Redux when user types (live filtering)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        dispatch(addSetDiscoverProduct({ query, search: query }));
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query, dispatch]);

  // Submit form
  const handleLinkPageDiscover = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const inputQuery = formData.get("search")?.toString() ?? "";

    dispatch(addSetDiscoverProduct({ query: inputQuery, search: inputQuery }));
    router.push("/discover");
  };

  return (
    <>
      {/* Button Search Icon */}
      <button
        aria-label="Open search"
        className={`btn  btn-circle btn-ghost  hover:text-neutral ${
          isSearch ? "hidden" : "flex"
        }`}
        onClick={() => setIsSearch(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {/* Search Input Form */}
      <form onSubmit={handleLinkPageDiscover}>
        <label
          className={`input input-bordered flex w-full rounded-md items-center gap-2 ${
            !isSearch ? "hidden" : ""
          }`}>
          <input
            name="search" // ✅ required for FormData
            type="text"
            className={`grow ${isSearch ? "w-[13rem] lg:w-[22rem]" : "w-full"}`}
            placeholder="Search"
            onFocus={() => setIsSearch(true)}
            onChange={(e) => setQuery(e.target.value)}
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
      </form>
    </>
  );
};
