import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type bodyType = {
  produkname: string;
  price: string;
  categoryid: string;
  deskripsi: string;
  brands: string;
  gallery: string[];
};

interface OnSuccessResponse {
  message: string;
  success: boolean;
}

export const usePostAddProductAdmin = ({
  onSuccess,
}: {
  onSuccess: (value: OnSuccessResponse) => void;
}) => {
  return useMutation({
    mutationFn: async (body: bodyType) => {
      const response = await axios.post("/api/hsadmin/product", body);
      return response.data;
    },
    onSuccess,
  });
};
