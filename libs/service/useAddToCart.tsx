"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface DeleteCartResponse {
  message: string;
  success: boolean;
}

type typeStoreData = {
  id: number;
  name: string;
  price: number;
  qty: number;
  size: string;
  image: string;
  category: string;
};

export const useAddToCart = ({
  onSuccess,
}: {
  onSuccess: (data: DeleteCartResponse) => void;
}) => {
  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: async (body: typeStoreData) => {
      try {
        const store = await axios.post("/api/cart", body);
        return store.data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess,
  });
};
