import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const FetchCategory = async () => {
  const res = await axios.get("/api/category");

  return res.data.datas;
};

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["categoryData"],
    queryFn: () => FetchCategory(),
  });
};
