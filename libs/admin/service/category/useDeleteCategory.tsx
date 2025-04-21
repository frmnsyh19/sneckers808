import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface DeleteCartResponse {
  message: string;
  success: boolean;
}

export const useDeleteCategory = ({
  onSuccess,
}: {
  onSuccess: (data: DeleteCartResponse) => void;
}) => {
  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const res = await axios.delete("/api/category/snadmin", {
        params: {
          id: id,
        },
      });
      return res.data;
    },
    onSuccess,
  });
};
