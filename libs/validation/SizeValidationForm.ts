import { string, z } from "zod";

export const SizeValidationForm = z.object({
  productid: string().min(1, "product is required"),
  size: string().min(1, "size is required"),
  stok: string().min(1, "stok is required"),
});
