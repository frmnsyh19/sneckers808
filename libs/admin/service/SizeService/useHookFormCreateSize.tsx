import { SizeValidationForm } from "@/libs/validation/SizeValidationForm";
import { useFormik } from "formik";
import { toast } from "react-toastify";

type bodyMutation = {
  size: string;
  productid: number;
  stok: number;
};

export const useHookFormCreateSize = ({
  mutate,
}: {
  mutate: (value: bodyMutation) => void;
}) => {
  const formik = useFormik({
    initialValues: {
      productid: "",
      size: "",
      stok: "",
    },
    validate: (value) => {
      const validationShema = SizeValidationForm.safeParse(value);
      if (!validationShema.success) {
        return validationShema.error.flatten().fieldErrors;
      }
      return {};
    },
    onSubmit: async () => {
      const { size, stok, productid } = formik.values;
      mutate({
        size,
        productid: parseInt(productid),
        stok: parseInt(stok),
      });

      toast.success("success add data");
      formik.resetForm();
    },
  });
  return formik;
};
