import { z } from "zod";

export const BrandValidation = z.object({
  brandname: z.string().min(1, "brandname is required"),
});
