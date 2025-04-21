import { multipleFiles } from "@/libs/service/ServiceUploadImageProduct";
import { useFormik } from "formik";
import { toast } from "react-toastify";

type bodyType = {
  produkname: string;
  price: string;
  categoryid: string;
  deskripsi: string;
  brands: string;
  gallery: string[];
};

export const useHookFormikCreateProduct = ({
  mutate,
  files,
}: {
  mutate: (value: bodyType) => void;
  files: File[];
}) => {
  const formik = useFormik({
    initialValues: {
      categoryid: "",
      produkname: "",
      brands: "",
      deskripsi: "",
      slug: "",
      price: "",
    },
    onSubmit: async () => {
      const { categoryid, produkname, brands, deskripsi, price } =
        formik.values;
      const uploadImage = await multipleFiles(files);
      if (!uploadImage.success) {
        return toast.error(uploadImage.message!);
      }

      mutate({
        categoryid,
        produkname,
        brands,
        deskripsi,
        price,
        gallery: uploadImage.downloadUrls || [],
      });
      formik.resetForm();
    },
  });
  return formik;
};
