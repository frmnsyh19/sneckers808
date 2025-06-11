import { addSetCart } from "@/features/CartRedux";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

interface CartItems {
  id: number;
  name: string;
  qty: number;
  brand: string;
  image: string;
  price: number;
  total: number;
}

export const useHookQuencySubTotal = ({ cart }: { cart: CartItems[] }) => {
  const dispatch = useDispatch();

  const subtotal = useMemo(() => {
    return cart?.reduce((acc, item) => acc + item.price * item.qty, 0);
  }, [cart]);

  useEffect(() => {
    if (subtotal) {
      dispatch(addSetCart({ totalprice: subtotal }));
    }
  }, [subtotal, dispatch]);

  return subtotal;
};
