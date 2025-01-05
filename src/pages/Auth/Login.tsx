import loginSchema from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { IUser } from "@/interfaces/IUser";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchUser } from "@/features/user/userAction";

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    try {
      dispatch(fetchUser());
    } catch (error) {
      console.log(error);
    }
    return () => {};
  }, []);
  const nav = useNavigate();

  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  function onSubmit(userNew: IUser) {
    console.log(userNew);
    const isAdmin =
      userNew.email === "trunghieu@gmail.com" && userNew.password === "123123";
    // kiểm tra xem đây có phải admin hay ko
    if (isAdmin) {
      // nếu là ad min thì chuyển sang trang admin
      nav("/admin");
    } else {
      // ko phải admin thì sẽ kiểm tra xem tài khoản người dùng này đã đăng kí hay chưa
      const userAuth = users.find((item) => item.email === userNew.email);
      console.log(userAuth);
      if (userAuth) {
        // trường hợp tài khoản người dùng đã có thì kiểm tra xem đã nhập đúng mật khẩu hay chưa
        const authPassword = userNew.password === userAuth.confirmPassword;

        if (authPassword) {
          //  TH nhập đùng thì chuyển sang trang người dùng
          nav("/");
        } else {
          // TH sai thì sẽ sẽ thông báo lỗi password ko đúng
          confirm("password ko đúng");
        }
      } else {
        confirm("Tài khoản không tồn tại");
      }
    }
  }
  return (
    <>
      <div className="flex justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 max-w-[400px] w-full"
            noValidate
          >
            <h3 className="text-xl font-semibold text-center">Đăng nhập</h3>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link to="/register">Bạn chưa có tài khoản ?</Link>
            <Button type="submit" className="!mt-8 w-full">
              Đăng nhập
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Login;
