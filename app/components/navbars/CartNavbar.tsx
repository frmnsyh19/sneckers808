"use client";

import { formatPrice } from "@/libs/helper/FormatPrice.";
import { useDeleteCart } from "@/libs/service/useDeleteCart";
import { useGetCart } from "@/libs/service/useGetCart";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

interface CartItems {
  id: number;
  name: string;
  qty: number;
  size: string;
  image: string;
  price: number;
}

export const CartNavbar = () => {
  const [subtotal, setSubTotal] = useState<number>(0);

  const { data: cartItems = [], refetch: refetchCart } = useGetCart();

  const { mutate: mutateDelete } = useDeleteCart({
    onSuccess: () => {
      refetchCart();
      toast.success("Item successfully removed!");
    },
  });

  const handleRemoveCart = (cartid: number) => {
    const konfirmasi = confirm("are you sure");

    if (konfirmasi) {
      mutateDelete({ cartid });
    }
  };

  useEffect(() => {
    const total = cartItems.reduce(
      (acc: number, item: CartItems) => acc + item.price * item.qty,
      0
    );
    setSubTotal(total);
  }, [cartItems]);

  return (
    <>
      <div className="dropdown dropdown-end lg:block hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {cartItems.length || "0"}
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-slate-50 z-[1] mt-3  w-[23rem] ml-7  lg:w-[24rem] shadow">
          <div className="card-body w-full">
            {cartItems ? (
              <>
                <span className="text-lg font-bold">
                  {cartItems.length} Items
                </span>
                <span className="text-info">
                  Subtotal: ${formatPrice(subtotal)}
                </span>
                <div
                  className={`w-full flex flex-col gap-3 p-1 overflow-y-auto  ${
                    cartItems.length > 2 ? "h-[22rem]" : ""
                  }`}>
                  {cartItems.map((item: CartItems) => (
                    <div className="w-full flex flex-col" key={item.id}>
                      <div className="w-full p-1 flex justify-end">
                        <button
                          className="btn btn-sm btn-ghost"
                          onClick={() => handleRemoveCart(item.id)}>
                          <FaXmark className="text-base" />
                        </button>
                      </div>
                      <div className="w-full flex justify-start items-center p-1">
                        <div className="flex flex-row gap-3 w-full">
                          <img
                            src={item.image}
                            className="w-20 lg:w-28"
                            alt={item.name}
                          />
                          <div className="flex flex-col gap-1">
                            <div className="w-14 lg:w-20 border border-gray-500 p-1">
                              <p className="text-gray-500 text-sm lg:text-base">
                                Size : {item.size}
                              </p>
                            </div>
                            <p className="text-base font-bold">{item.name}</p>
                            <p className="text-base text-gray-400">
                              {formatPrice(item.price)}
                            </p>
                            <p className="text-sm text-gray-400">
                              Qty: {item.qty}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="card-actions">
                  <Link href="/cart" className="w-full">
                    <button className="btn text-white btn-neutral btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500">Your cart is empty</p>
            )}
          </div>
        </div>
      </div>

      {/* DAWER CART */}
      <div className="drawer drawer-end lg:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-circle btn-ghost">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">
                {" "}
                {cartItems.length || "0"}
              </span>
            </div>
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <div className=" flex flex-col gap-2 bg-base-200 text-base-content min-h-full w-80 p-4">
            <div className="w-full flex justify-between items-center">
              <span className="text-lg font-bold">
                {cartItems.length} Items
              </span>
              <span className="text-info">
                Subtotal: ${formatPrice(subtotal)}
              </span>
            </div>
            <div
              className={`w-full flex flex-col gap-3 p-1 ${
                cartItems.length >= 2 ? "overflow-y-scroll" : ""
              }`}>
              {cartItems.map((item: CartItems) => (
                <div className="w-full flex flex-col" key={item.id}>
                  <div className="w-full p-1 flex justify-end">
                    <button
                      className="btn btn-sm btn-ghost"
                      onClick={() => handleRemoveCart(item.id)}>
                      <FaXmark className="text-base" />
                    </button>
                  </div>
                  <div className="w-full flex justify-start items-center p-1">
                    <div className="flex flex-col lg:flex-row  gap-3 w-full">
                      <img
                        src={item.image}
                        className="w-32 lg:w-28"
                        alt={item.name}
                      />
                      <div className="flex flex-col gap-1 w-full">
                        <div className="w-16 lg:w-20 border border-gray-500 p-1">
                          <p className="text-gray-500 text-sm lg:text-base">
                            Size : {item.size}
                          </p>
                        </div>
                        <p className="text-base font-bold">{item.name}</p>
                        <p className="text-base text-gray-400">
                          {formatPrice(item.price)}
                        </p>
                        <p className="text-sm text-gray-400">Qty: {item.qty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
