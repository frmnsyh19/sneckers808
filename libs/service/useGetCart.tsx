import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCart = () => {
  return useQuery({
    queryKey: ["keranjang"],
    queryFn: async () => {
      const response = await axios.get("/api/cart");
      return response.data?.datas ?? [];
    },
    refetchOnWindowFocus: false,
  });
};
