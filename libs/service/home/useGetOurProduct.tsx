"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetOurProduct = ({
  category,
  sort,
}: {
  category: string | number;
  sort: string;
}) => {
  return useQuery({
    queryKey: ["ourproduct", category, sort],
    queryFn: async () => {
      const res = await axios.get("/api/product/ourproduct", {
        params: {
          category,
          sort,
        },
      });
      return res.data;
    },
    refetchOnWindowFocus: false, // default: true
    refetchOnMount: false, // default: true
    refetchOnReconnect: false,
  });
};
