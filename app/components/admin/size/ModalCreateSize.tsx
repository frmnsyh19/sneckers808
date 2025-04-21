"use client";

import { useCreateSize } from "@/libs/admin/service/SizeService/useCreateSize";
import { useHookFormCreateSize } from "@/libs/admin/service/SizeService/useHookFormCreateSize";
import { useGetProduct } from "@/libs/service/useGetProduct";
import { TextField } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import { toast } from "react-toastify";

type typeProduct = {
  produkname: string;
  id: number;
};

export const ModalCreateSize = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}) => {
  const queryClient = useQueryClient();

  const { data: product } = useGetProduct();

  // mutate triger to post
  const { mutate, isPending } = useCreateSize({
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["size"] });
    },
    onError: (error: AxiosError) => {
      if (error.isAxiosError) {
        if (error.response?.status === 500) {
          toast.error("data is exists");
        }
      }
    },
  });

  // form handler
  const formik = useHookFormCreateSize({ mutate });

  return (
    <>
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Item</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className=" w-full mt-4 flex flex-col gap-1">
                <select
                  name="productid"
                  value={formik.values.productid}
                  onChange={formik.handleChange}
                  className=" select select-bordered w-full"
                  id="">
                  <option>select product</option>
                  {product
                    ? product.map((items: typeProduct, i: number) => {
                        return (
                          <>
                            <option value={items.id} key={i}>
                              {items.produkname}
                            </option>
                          </>
                        );
                      })
                    : ""}
                </select>
                {formik.errors.productid ? (
                  <small className=" text-red-600">
                    {formik.errors.productid}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div className=" w-full mt-4 flex flex-col gap-1">
                <TextField
                  id=""
                  fullWidth
                  label="size"
                  name="size"
                  value={formik.values.size}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
                {formik.errors.size ? (
                  <small className=" text-red-600">{formik.errors.size}</small>
                ) : (
                  ""
                )}
              </div>
              <div className=" w-full mt-4 flex flex-col gap-1">
                <TextField
                  id=""
                  fullWidth
                  label="size"
                  name="stok"
                  value={formik.values.stok}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
                {formik.errors.stok ? (
                  <small className=" text-red-600">{formik.errors.stok}</small>
                ) : (
                  ""
                )}
              </div>

              <div className="modal-action">
                <button
                  className=" btn btn-outline"
                  onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button
                  type="submit"
                  className={`btn btn-primary ${
                    isPending ? "btn-disabled" : ""
                  }`}>
                  {isPending ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    "submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
