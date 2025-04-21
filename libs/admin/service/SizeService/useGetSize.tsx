import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetSize = (query: string) => {
  return useQuery({
    queryKey: ["size", query],
    queryFn: async () => {
      const res = await axios.get("/api/size", {
        params: {
          query,
        },
      });

      return res.data.datas;
    },
  });
};
