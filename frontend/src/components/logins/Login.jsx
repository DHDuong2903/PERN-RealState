import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { FormInput } from "../forms";
import { useState } from "react";

import { useGoogleLogin } from "@react-oauth/google";

const formSchema = z.object({
  emailOrPhone: z.string().min(1, "Trường này là bắt buộc"),
  fullname: z.string().min(1, "Trường này là bắt buộc"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrPhone: "",
      fullname: "",
      password: "",
    },
  });

  const [variant, setVariant] = useState("SIGNIN");

  const toggleVariant = () => {
    if (variant === "SIGNIN") {
      setVariant("SIGNUP");
    } else {
      setVariant("SIGNIN");
    }
  };

  const handleSignInGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.error("Login Failed:", error),
  });

  return (
    <div className=" text-main">
      <h1 className="text-2xl font-bold mb-4">
        {variant === "SIGNIN" ? "Đăng nhập để tiếp tục" : "Tạo tài khoản mới"}
      </h1>
      <Form {...form}>
        <form className="space-y-6">
          {variant === "SIGNUP" && (
            <FormInput form={form} name="fullname" label="Tên đầy đủ" placeholder="fullname" type="text" />
          )}

          <FormInput
            form={form}
            name="emailOrPhone"
            label="Email hoặc số điện thoại"
            placeholder="email or phone"
            type="text"
          />

          <FormInput form={form} name="password" label="Mật khẩu" placeholder="password" type="password" />

          {variant === "SIGNIN" ? (
            <Button type="submit" size="lg" className="w-full">
              Đăng nhập
            </Button>
          ) : (
            <Button type="submit" size="lg" className="w-full">
              Đăng ký
            </Button>
          )}
        </form>
      </Form>
      <div className="relative w-full flex items-center my-4">
        <div className="w-full h-[1px] bg-stone-200"></div>
        <p className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-secon">Hoặc</p>
      </div>

      <Button onClick={handleSignInGoogle} variant="outline" type="submit" className="w-full">
        <img src="/svg/google-icon.svg" alt="google" className="w-5 h-5" />
        Đăng nhập với Google
      </Button>
      <p className="text-sm text-center mt-6">
        <span>
          {" "}
          {variant === "SIGNIN" ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"}
          <span onClick={toggleVariant} className="text-secon font-bold cursor-pointer hover:underline">
            {" "}
            {variant === "SIGNIN" ? "Đăng ký" : "Đăng nhập"}
          </span>
          <span> tại đây</span>
        </span>
      </p>
    </div>
  );
};

export default Login;
