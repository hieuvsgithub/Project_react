import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "tối thiểu 6 kí tự !!" })
    .max(100, { message: "password của bạn quá dài !!" }),
});

export default loginSchema;
