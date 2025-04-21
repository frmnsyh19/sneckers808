import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface DeleteCartResponse {
  message: string;
  success: boolean;
}

interface DeleteCartPayload {
  cartid: number; // The ID of the cart item to delete
}
export const useDeleteCart = ({
  onSuccess,
}: {
  onSuccess: (data: DeleteCartResponse) => void;
}) => {
  return useMutation<DeleteCartResponse, unknown, DeleteCartPayload>({
    mutationFn: async ({ cartid }) => {
      const response = await axios.delete<DeleteCartResponse>(
        "/api/keranjang",
        {
          params: { id: cartid },
        }
      );
      return response.data; // Return the response data
    },
    onSuccess,
  });
};
