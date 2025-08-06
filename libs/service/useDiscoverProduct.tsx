"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ParamsDiscover = {
  query: string;
  category: string | number;
  sort: string;
};

export const useDiscoverProduct = ({
  query,
  category,
  sort,
}: ParamsDiscover) => {
  return useQuery({
    queryKey: ["discoverProduct", query, category, sort],
    queryFn: async () => {
      const res = await axios.get("/api/discover", {
        params: {
          query,
          category,
          sort,
        },
      });
      return res.data.datas;
    },
  });
};
