import { string, z } from "zod";

export const categoryvalidation = z.object({
  categoryname: string().min(1, "category is required"),
});
