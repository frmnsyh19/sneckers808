import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const FetchCategory = async (query: string) => {
  const res = await axios.get("/api/hsadmin/category", {
    params: {
      query,
    },
  });

  return res.data.datas;
};

export const useGetCategoryData = (query: string) => {
  return useQuery({
    queryKey: ["categoryData", query],
    queryFn: () => FetchCategory(query),
  });
};
