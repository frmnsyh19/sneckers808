"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type bodyType = {
  categoryname: string;
  id: number;
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateCategory"],
    mutationFn: async (body: bodyType) => {
      try {
        const response = await axios.put("/api/category/snadmin", body);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["categoryData"] });
    },
  });
};
