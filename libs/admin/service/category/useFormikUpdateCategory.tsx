"use client";

import { categoryvalidation } from "@/libs/validation/categoryvalidation";
import { useFormik } from "formik";
import { toast } from "react-toastify";

type bodyType = {
  categoryname: string;
  id: number;
};

export const useFormikUpdateCategory = ({
  mutate,
  oldCategory,
}: {
  mutate: (data: bodyType) => void;
  oldCategory: {
    id: number;
    categoryname: string;
  };
}) => {
  const formik = useFormik({
    initialValues: {
      id: oldCategory.id,
      categoryname: oldCategory.categoryname || "",
    },
    enableReinitialize: true,
    validate: (values) => {
      const result = categoryvalidation.safeParse(values);
      if (!result.success) {
        return result.error.flatten().fieldErrors;
      }
      return {};
    },
    onSubmit: () => {
      const { id, categoryname } = formik.values;

      mutate({
        id,
        categoryname,
      });

      toast.success("update category success");

      formik.resetForm();
    },
  });

  return formik;
};
