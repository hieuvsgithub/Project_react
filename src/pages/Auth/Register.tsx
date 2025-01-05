import registerSchema from "@/schemas/registerSchema";
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
import { addUser, fetchUser } from "@/features/user/userAction";

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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

  const dispatch = useDispatch<AppDispatch>();

  function onSubmit(userNew: IUser) {
    (async () => {
      const res = await dispatch(addUser(userNew)).unwrap();

      if (res && res.message) {
        alert(res.message);
      } else {
        nav("/login");
      }
    })();
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
            <h3 className="text-xl font-semibold text-center">Đăng kí</h3>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ConfirmPassword</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ConfirmPassword"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link to="/login">Bạn đã có tài khoản ?</Link>
            <Button type="submit" className="!mt-8 w-full">
              Đăng kí
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Register;
