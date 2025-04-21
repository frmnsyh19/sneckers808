import { object, string } from "zod";

export const SignUpValidation = object({
  name: string().min(1, "name is required"),
  email: string().email("invalid email"),
  password: string().min(8, "min 8 character").max(10, "max 10 character"),
  confirmpassword: string()
    .min(8, "min 8 character")
    .max(10, "max 10 character"),
}).refine((data) => data.password === data.confirmpassword, {
  message: "password not match",
  path: ["confirmpassword"],
});

export const SignInValidation = object({
  email: string().email("invalid email"),
  password: string().min(8, "min 8 character").max(10, "max 10 character"),
});
