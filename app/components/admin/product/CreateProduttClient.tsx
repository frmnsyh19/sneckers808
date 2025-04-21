"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHookFormikCreateProduct } from "@/libs/admin/service/product/useHookFormikCreateProduct";
import { useGetCategory } from "@/libs/service/useGetCategory";
import { usePostAddProductAdmin } from "@/libs/admin/service/product/usePostAddProductAdmin";

type CategoryType = {
  categoryname: string;
  id: number;
};

export const CreateProductClient = () => {
  const [images, setImages] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      const allImage = selectedFiles.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...allImage]);
    }
  };

  const { mutate, isPending } = usePostAddProductAdmin({
    onSuccess: () => {
      setImages([]);
      setFiles([]);
      toast.success("add product success");
    },
  });

  const { data: category } = useGetCategory();

  const formik = useHookFormikCreateProduct({ mutate, files });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-groups flex justify-start w-full flex-col gap-2 p-3">
          <div className="w-full p-1 flex-col flex gap-1">
            <FormControl fullWidth>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={formik.values.categoryid}
                onChange={formik.handleChange}
                name="categoryid"
                label="Category">
                <MenuItem value="" disabled>
                  <em>None</em>
                </MenuItem>
                {category
                  ? category.map((item: CategoryType) => (
                      <MenuItem key={item.id} value={item.id}>
                        <div className="w-full flex flex-col">
                          <span className="">{item.categoryname}</span>
                        </div>
                      </MenuItem>
                    ))
                  : ""}
              </Select>
            </FormControl>
          </div>
          <div className="w-full p-1">
            <TextField
              fullWidth
              name="produkname"
              label="Product Name"
              value={formik.values.produkname}
              onChange={formik.handleChange}
              variant="outlined"
            />
          </div>
          <div className="w-full p-1">
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              variant="outlined"
            />
          </div>
          <div className="w-full p-1">
            <TextField
              fullWidth
              label="Description"
              name="deskripsi"
              value={formik.values.deskripsi}
              onChange={formik.handleChange}
              multiline
              rows={4}
            />
          </div>
          <div className="w-full p-1 flex flex-col gap-4">
            <input
              type="file"
              className="w-full file-input file-input-bordered"
              multiple
              accept="image/*"
              onChange={handleImage}
            />
            <div className="w-full flex justify-start gap-8">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`preview-${index}`}
                  className="w-20 object-cover"
                />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-end items-center p-4">
            <Button
              variant="contained"
              type="submit"
              size="large"
              color="secondary"
              disabled={isPending}>
              {isPending ? (
                <>
                  <span className="loading loading-infinity loading-md text-error"></span>{" "}
                  Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

//
