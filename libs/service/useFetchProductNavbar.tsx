import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const FecthApiProducts = async (query: string | null) => {
  const res = await axios.get("/api/discover/product", {
    params: {
      query,
      limit: 5,
    },
  });

  return res.data.datas;
};

export const useFetchProductNavbar = (query: string | null) => {
  return useQuery({
    queryKey: ["produtcs", query],
    queryFn: () => FecthApiProducts(query),
  });
};
