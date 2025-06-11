interface CartItem {
  id: number;
  name: string;
  qty: number;
  brand: string;
  image: string;
  price: number;
  total: number;
}

export const UpdateQtyCart = (
  cart: CartItem[],
  id: number,
  isIncrement: boolean
) => {
  return cart.map((item) => {
    if (item.id === id) {
      const newQty = isIncrement ? item.qty + 1 : Math.max(item.qty - 1, 1);
      return {
        ...item,
        qty: newQty,
        total: item.price * newQty,
      };
    }
    return item;
  });
};
