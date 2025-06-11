"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductById = ({ productid }: { productid: string }) => {
  return useQuery({
    queryKey: ["productbyid", productid],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/product/productbyid", {
          params: {
            productid,
          },
        });

        return res.data.datas;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnWindowFocus: false,
  });
};
