import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetNewArrival = () => {
  return useQuery({
    queryKey: ["newarrival"],
    queryFn: async () => {
      try {
        const res = await axios.get("/api/product/newarrival");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnWindowFocus: false,
  });
};
