"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetSize = (productid: string) => {
  return useQuery({
    queryKey: ["sizeProduct", productid],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/product/size");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnWindowFocus: false,
  });
};
