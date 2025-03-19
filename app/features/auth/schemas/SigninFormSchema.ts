import { z } from "zod";

export const SigninSchema = z.object({
  username: z.coerce
    .string()
    .min(5, { message: "Escreva um dado valido" })
    .trim(),
  password: z.string().min(5, { message: "Escreva um dado valido" }).trim(),
});

export type SigninSchema = z.infer<typeof SigninSchema>;

