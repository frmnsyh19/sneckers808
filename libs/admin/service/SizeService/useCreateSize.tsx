import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

interface OnSuccessResponse {
  message: string;
  success: boolean;
}

type bodyType = {
  size: string;
  productid: number;
  stok: number;
};

export const useCreateSize = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: OnSuccessResponse) => void;
  onError: (data: AxiosError) => void;
}) => {
  return useMutation({
    mutationFn: async (body: bodyType) => {
      const res = await axios.post("/api/snadmin/size", body);
      if (res.status === 200) {
        return res.data;
      }
    },
    onSuccess,
    onError,
  });
};
