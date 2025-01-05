import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import productSchema from "@/schemas/productSchema";
import { IProduct } from "@/interfaces/IProduct";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  addProduct,
  editProduct,
  oderByIdProduct,
} from "@/features/product/productAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const ActionProduct = () => {
  const nav = useNavigate();
  let { id } = useParams();
  id = +id;

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
    },
  });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      if (id) {
        const product = await dispatch(oderByIdProduct(id));
        form.reset(product.payload);
      }
    })();

    return () => {};
  }, []);

  const onSubmit = (productNew: IProduct) => {
    if (id) {
      const data = productNew;
      dispatch(editProduct({ id, data }));
      nav("/admin");
    } else {
      dispatch(addProduct(productNew));
      if (confirm("Thêm sản phẩm mới thành công. Quay lại trang sản phẩm")) {
        nav("/admin");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2  ">
        <h3 className="text-[1.6rem] font-semibold text-center">
          Thêm sản phẩm mới
        </h3>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="description" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="price"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="!mt-[20px]  bg-green-600 " type="submit">
          Thêm sản phẩm
        </Button>
      </form>
    </Form>
  );
};

export default ActionProduct;
