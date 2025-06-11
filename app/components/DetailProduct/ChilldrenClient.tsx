"use client";

import React, { useEffect } from "react";
import { Gellery } from "./Gellery";
import { useGetProductById } from "@/libs/service/useGetProductById";
import { LoadingPage } from "../LoadingPage";
import { ContentProduct } from "./ContentProduct";
import { AppDispatch, useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { fetchsize } from "@/features/SizeThunk";
import { SetSize } from "@/features/SizeReducer";

type Props = {
  productid: string;
};

export const ChilldrenClient: React.FC<Props> = ({ productid }) => {
  const {
    data: product,
    isLoading: productloading,
    isSuccess,
  } = useGetProductById({
    productid,
  });
  const { loading } = useAppSelector((state) => state.sizeReducer);

  const dispacth = useDispatch<AppDispatch>();

  useEffect(() => {
    dispacth(fetchsize({ productid }));
  }, [dispacth, productid]); // ✅ tambahkan dependency array

  useEffect(() => {
    if (isSuccess) {
      dispacth(SetSize({ size: product.size }));
    }
  }, [isSuccess, dispacth, product]);

  if (productloading || loading) {
    return <LoadingPage />;
  }

  return (
    <div className="w-full h-screen flex lg:flex-row flex-col gap-2">
      <Gellery gallery={product?.gallery ?? [""]} />
      <ContentProduct product={product} />
    </div>
  );
};
