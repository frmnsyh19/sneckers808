import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type StoreCategory = {
  categoryname: string;
};

interface OnSuccessResponse {
  message: string;
  success: boolean;
}

export const useStoreCategory = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: OnSuccessResponse) => void;
  onError: (error: AxiosError) => void;
}) => {
  return useMutation({
    mutationFn: async (body: StoreCategory) => {
      const res = await axios.post("/api/hsadmin/category", body);
      return res.data;
    },
    onSuccess,
    onError,
  });
};
