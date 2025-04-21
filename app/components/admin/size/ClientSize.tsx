"use client";

import React, { useState } from "react";
import { SearchSize } from "./SearchSize";
import { TableSize } from "./TableSize";

export const ClientSize = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className=" w-full flex flex-col gap-2">
      <SearchSize setQuery={setQuery} />
      <TableSize query={query} />
    </div>
  );
};
