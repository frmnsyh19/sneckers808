import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios.get("/api/profile");

      if (res.status !== 200) {
        throw new Error("Error fetching profile data");
      }

      return res.data.datas;
    },
  });
};
