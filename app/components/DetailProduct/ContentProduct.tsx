import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Size } from "./Size";
import { Qty } from "./Qty";
import { toast, ToastContainer } from "react-toastify";
import { useAddToCart } from "@/libs/service/useAddToCart";
import { useAppSelector } from "@/store/store";
import { formatPrice } from "@/libs/helper/FormatPrice.";

interface Category {
  categoryname: string;
}
interface Product {
  id: number;
  produkid: string;
  produkname: string;
  price: number;
  category: Category;
  gallery: string[];
  deskripsi: string;
}

interface PropsPage {
  product: Product;
}

export const ContentProduct: React.FC<PropsPage> = ({ product }) => {
  const { size, qty } = useAppSelector((state) => state.ourproduct);

  const { mutate, isPending } = useAddToCart({
    onSuccess: () => {
      toast.success("success items add to cart");
    },
  });

  const handleAddToCart = () => {
    mutate({
      id: product.id,
      name: product.produkname,
      price: product.price,
      image: product.gallery[0],
      qty,
      size,
      category: product.category.categoryname,
    });
  };

  return (
    <div className=" lg:w-[30%] w-full flex flex-col p-3 lg:p-5 gap-2">
      <div className=" w-full flex flex-col gap-1">
        <p className=" text-3xl text-slate-800 font-bold">
          {product.produkname}
        </p>
        <p className=" text-xl capitalize text-gray-400">
          {product.category.categoryname}
        </p>
        <p className="text-3xl font-bold text-neutral">
          {formatPrice(product.price)}
        </p>
      </div>
      <div className=" w-full flex flex-col gap-2">
        <div className=" w-full flex flex-col mt-2 gap-1">
          <span className=" text-base text-slate-800 font-bold ">
            Deskripsi
          </span>
          <p className=" text-base text-gray-400">{product?.deskripsi}</p>
        </div>
        <div className=" w-full flex flex-col gap-2">
          <p className=" text-base text-slate-800 font-bold">Size</p>
          <Size />
        </div>
        <div className=" w-full flex justify-start flex-col gap-2 mt-2">
          <p className=" text-base text-slate-800 font-bold">Qty</p>
          <Qty />
        </div>
        <div className=" w-full justify-end flex  gap-2 mt-5 ">
          <button
            className={`btn w-full btn-lg border-none bg-slate-800 text-white text-base ${
              isPending ? "btn-disabled" : ""
            }`}
            onClick={handleAddToCart}>
            <FaShoppingCart />
            Keranjang
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
