"use client";

import { addSetDiscoverProduct } from "@/features/DiscoverSliders";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const MenuBars = () => {
  const [categorys, setCategorys] = useState<string>("");

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (categorys) {
      dispatch(addSetDiscoverProduct({ category: categorys }));
      router.push("/productcategory");
    }
  }, [categorys, dispatch]);

  return (
    <ul className="menu menu-horizontal px-1 lg:flex hidden">
      <li>
        <a className=" text-lg">Home</a>
      </li>
      <li>
        <a className=" text-lg">Discover</a>
      </li>
      <li>
        <a className="text-lg">About</a>
      </li>
      <li>
        <a className="text-lg" onClick={() => setCategorys("running")}>
          Running
        </a>
      </li>
      <li>
        <a className="text-lg" onClick={() => setCategorys("sneckers")}>
          Sneckers
        </a>
      </li>
      <li>
        <a className="text-lg" onClick={() => setCategorys("formal")}>
          Formal
        </a>
      </li>
    </ul>
  );
};
