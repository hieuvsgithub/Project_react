import { z } from "zod";

const productSchema = z.object({
  title: z.string().trim().min(2, { message: "Tối thiếu 2 kí tự" }),
  description: z.string().trim(),
  price: z
    .number()
    .min(1000, { message: "Giá không được nhỏ hơn 1000" })
    .positive("Price must be greater than 0"),
});

export default productSchema;
