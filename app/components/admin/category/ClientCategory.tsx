"use client";

import React, { useState } from "react";
import { SearchCategory } from "./SearchCategory";
import { TableCategory } from "./TableCategory";

export const ClientCategory = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className=" w-full flex flex-col gap-2 p-2">
      <SearchCategory setQuery={setQuery} />
      <TableCategory query={query} />
    </div>
  );
};
