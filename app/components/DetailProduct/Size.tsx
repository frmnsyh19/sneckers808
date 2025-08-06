"use client";

import { addOurProductState } from "@/features/OurProductSlider";
import { useAppSelector } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type SizeType = {
  size: string;
  stok: number;
};

export const Size = () => {
  const [isSize, setIsSize] = useState<string>("");
  const [selectSize, setSelectSize] = useState<number | null>();
  const { size } = useAppSelector((state) => state.SizeSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSize) {
      dispatch(addOurProductState({ size: isSize }));
    }
  }, [isSize, dispatch]);

  const handleSizeSelect = (index: number, thissize: string) => {
    setIsSize(thissize);
    setSelectSize(index);
  };

  return (
    <div className=" w-full flex gap-2">
      {size &&
        size.map((items: SizeType, i: number) =>
          items.stok > 0 ? (
            <div
              key={i}
              onClick={() => handleSizeSelect(i, items.size)}
              className={`btn btn-sm rounded-md   ${
                selectSize == i ? "bg-lime-400 text-white" : "btn-outline"
              }`}>
              {items.size}
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};
