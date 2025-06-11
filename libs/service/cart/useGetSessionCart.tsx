import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetSessionCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get("/api/cart");
      if (res.status === 200) {
        return res.data.datas;
      }
    },
  });
};
