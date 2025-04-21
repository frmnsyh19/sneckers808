import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface DeleteCartResponse {
  message: string;
  success: boolean;
}

export const useDeleteSize = ({
  onSuccess,
}: {
  onSuccess: (data: DeleteCartResponse) => void;
}) => {
  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const res = await axios.delete("/api/size", {
        params: {
          id: id,
        },
      });
      return res.data;
    },
    onSuccess,
  });
};
