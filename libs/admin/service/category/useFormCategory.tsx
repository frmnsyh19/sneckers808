import { categoryvalidation } from "@/libs/validation/categoryvalidation";
import { useFormik } from "formik";

type Mutation = {
  categoryname: string;
};

export const useFormCategory = ({
  mutate,
}: {
  mutate: (value: Mutation) => void;
}) => {
  const formik = useFormik({
    initialValues: {
      categoryname: "",
    },
    validate: (values) => {
      const result = categoryvalidation.safeParse(values);
      if (!result.success) {
        return result.error.flatten().fieldErrors;
      }
      return {};
    },
    onSubmit: async () => {
      mutate({ categoryname: formik.values.categoryname.toLowerCase() });
      formik.resetForm();
    },
  });

  return formik;
};
