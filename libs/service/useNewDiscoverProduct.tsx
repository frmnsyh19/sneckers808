"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useNewDiscoverProduct = () => {
  return useQuery({
    queryKey: ["newdiscoverproduct"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/product");
        return response.data.datas;
      } catch (error) {
        console.log("message", error);
        throw error;
      }
    },
  });
};
