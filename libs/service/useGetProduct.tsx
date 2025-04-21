import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("/api/product");
      if (res.status === 200) {
        return res.data.datas;
      }

      return res.data;
    },
  });
};
