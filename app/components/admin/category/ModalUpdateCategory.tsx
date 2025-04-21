"use client";

import { useFormikUpdateCategory } from "@/libs/admin/service/category/useFormikUpdateCategory";
import { useUpdateCategory } from "@/libs/admin/service/category/useUpdateCategory";
import { TextField } from "@mui/material";
import React from "react";

type propsType = {
  setShowUpdate: (value: boolean) => void;
  showUpdate: boolean;
  oldCategory: {
    id: number;
    categoryname: string;
  };
};

export const ModalUpdateCategory: React.FC<propsType> = ({
  showUpdate,
  setShowUpdate,
  oldCategory,
}) => {
  const { mutate, isPending } = useUpdateCategory();

  const formik = useFormikUpdateCategory({ mutate, oldCategory });

  return (
    <>
      {showUpdate && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add New Category</h3>
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
                    onClick={() => setShowUpdate(false)}>
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
      )}
    </>
  );
};
