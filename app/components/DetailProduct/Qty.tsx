"use client";
import { addOurProductState } from "@/features/OurProductSlider";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const Qty = () => {
  const [count, setCount] = useState<number>(1);

  const dispatch = useDispatch();

  useEffect(() => {
    if (count) {
      dispatch(addOurProductState({ qty: count }));
    }
  }, [count, dispatch]);

  return (
    <div className="w-full flex justify-start gap-1">
      <button
        className="btn btn-sm btn-outline"
        onClick={() =>
          setCount((prevCount) => (prevCount <= 1 ? 1 : prevCount - 1))
        }>
        -
      </button>
      <div className="p-1 w-8 flex justify-center items-center rounded-md">
        {count}
      </div>

      <button
        className="btn btn-sm btn-outline"
        onClick={() => setCount((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};
