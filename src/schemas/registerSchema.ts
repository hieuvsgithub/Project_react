import { z } from "zod";

const registerSchema = z
  .object({
    username: z
      .string()
      .min(2, { message: "tối thiểu 2 kí tự !!" })
      .max(255, { message: "username của bạn quá dài !!" }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "tối thiểu 6 kí tự !!" })
      .max(100, { message: "password của bạn quá dài !!" }),
    confirmPassword: z
      .string()
      .min(6, { message: "tối thiểu 6 kí tự !!" })
      .max(100, { message: "confirmPassword của bạn quá dài !!" }),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Mật khẩu không khớp",
        path: ["confirmPassword"],
      });
    }
  });
export default registerSchema;
