"use client";
import TextField from "@mui/material/TextField";
import { useFormCategory } from "@/libs/admin/service/category/useFormCategory";
import { useStoreCategory } from "@/libs/admin/service/category/useStoreCategory";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

type ModalProps = {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
};

export const ModalCategory: React.FC<ModalProps> = ({ setIsOpen, isOpen }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useStoreCategory({
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["categoryData"] });
      toast.success("add data success");
      setIsOpen(false);
    },
    onError: (error) => {
      if (error.response?.status == 500) {
        toast.error("data exists");
      }
    },
  });

  const formik = useFormCategory({ mutate });

  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className=" w-full flex flex-col gap-3">
              <h3 className="font-bold text-lg">Hello!</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="w-full mt-4 flex flex-col gap-1">
                  <TextField
                    fullWidth
                    label="Category"
                    name="categoryname"
                    variant="outlined"
                    value={formik.values.categoryname}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.categoryname && (
                    <small className="text-red-500 text-sm">
                      {formik.errors.categoryname}
                    </small>
                  )}
                </div>

                <div className="modal-action">
                  {!isPending && (
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => setIsOpen(false)}>
                      Close
                    </button>
                  )}
                  {isPending ? (
                    <button disabled className="btn btn-primary btn-disabled">
                      <span className="loading loading-dots loading-md"></span>
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-neutral">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
