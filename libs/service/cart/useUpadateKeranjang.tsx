import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface CartItems {
  id: number;
  name: string;
  qty: number;
  brand: string;
  image: string;
  price: number;
  total: number;
}

export const useUpadateKeranjang = () => {
  return useMutation({
    mutationFn: async (body: { newcart: CartItems[] }) => {
      const updateCart = await axios.post("/api/cart", body);
      return updateCart;
    },
  });
};
