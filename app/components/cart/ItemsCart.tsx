"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdLock } from "react-icons/io";

import { useDispatch } from "react-redux";
import { useGetSessionCart } from "@/libs/service/cart/useGetSessionCart";
import { addSetCart } from "@/features/CartRedux";
import { useUpadateKeranjang } from "@/libs/service/cart/useUpadateKeranjang";
import { useDeleteCart } from "@/libs/service/useDeleteCart";
import { useHookQuencySubTotal } from "@/libs/service/cart/useHookQuencySubTotal";
import { formatPrice } from "@/libs/helper/FormatPrice.";
import { UpdateQtyCart } from "@/libs/service/cart/UpdateQtyCart";

interface CartItems {
  id: number;
  name: string;
  qty: number;
  brand: string;
  image: string;
  price: number;
  total: number;
}

export const ItemsCart = () => {
  const [cart, setCart] = useState<CartItems[]>([]);

  const router = useRouter();

  // get data cart via session
  const { data, refetch: refetchCart } = useGetSessionCart();

  const dispatch = useDispatch();

  // redux save totalproduct use for summaryCart
  useEffect(() => {
    if (cart) {
      dispatch(addSetCart({ totalproduct: cart.length }));
    }
  }, [cart, dispatch]);

  // action for update data cart and items to checkout
  const {
    mutate: mutateUpdateCart,
    isPending,
    isSuccess: SuccessUpdateCart,
  } = useUpadateKeranjang();

  // action delete cart
  const { mutate: mutateDelete } = useDeleteCart({
    onSuccess: () => {
      refetchCart();
      toast.success("deleteSuccess");
    },
  });

  //
  useEffect(() => {
    if (SuccessUpdateCart) {
      router.push("/checkout");
    }
  }, []);

  useEffect(() => {
    if (data) {
      setCart(data);
    }
  }, [data]);

  // count subtotal
  const subtotal = useHookQuencySubTotal({ cart });

  const updateCartQuantity = (id: number, isIncrement: boolean) => {
    setCart((prev) => UpdateQtyCart(prev, id, isIncrement));
  };

  return (
    <div className="w-full lg:w-3/5 flex flex-col lg:flex-row justify-start">
      <div className=" w-full flex flex-col gap-1">
        <div className=" w-full flex flex-col gap-2 justify-start p-1">
          <div className=" border-b border-gray-300  w-full p-1 h-20 flex items-center justify-between">
            <p className=" text-5xl">Cart</p>
            <div className=" flex justify-start flex-row h-full items-center">
              <IoMdLock className=" text-xl font-bold text-indigo-900" />
              <p className=" text-base underline text-indigo-900 ">
                Shopping Secure
              </p>
            </div>
          </div>
          {cart?.map((items, i) => {
            return (
              <div
                key={i}
                className=" w-full border-b border-gray-300 h-40 flex justify-between items-center">
                <div className=" w-4/5 flex justify-start items-center p-1 gap-1">
                  <img
                    src={items.image}
                    className=" w-28 lg:w-44 h-40"
                    alt=""
                  />
                  <div className=" flex flex-col p-1 gap-1">
                    <p className=" text-base lg:text-lg font-bold">
                      {items.name}
                    </p>
                    <span className=" text-base text-gray-400">
                      {formatPrice(items.price)}
                    </span>
                    <div className=" w-32 border flex justify-between items-center border-gray-300 p-1 ">
                      <button
                        onClick={() => updateCartQuantity(items.id, false)}
                        className=" btn btn-sm btn-ghost text-lg font-serif">
                        -
                      </button>
                      <p>{items.qty}</p>
                      <button
                        onClick={() => updateCartQuantity(items.id, true)}
                        className=" btn btn-sm btn-ghost text-lg font-serif">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" h-full p-2 flex justify-center items-center ">
                  <button
                    className={`btn btn-ghost text-base lg:text-lg text-indigo-800 font-bold`}
                    onClick={() => mutateDelete({ cartid: items.id })}>
                    remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {subtotal >= 0 ? (
          <div className="w-full mt-3 bg-white rounded-md p-3 flex justify-between items-center">
            <div className="flex flex-col">
              <p className=" text-xl text-indigo-900 font-bold">Sub Total</p>
              <span className=" text-xl text-gray-400">
                {formatPrice(subtotal + 5000)}
              </span>
            </div>

            <button
              className={`btn btn-neutral ${isPending ? "btn-disabled" : ""}`}
              onClick={() => mutateUpdateCart({ newcart: cart })}>
              CheckOut {`(${cart.length})`}
            </button>
          </div>
        ) : (
          ""
        )}
        <ToastContainer />
      </div>
    </div>
  );
};
