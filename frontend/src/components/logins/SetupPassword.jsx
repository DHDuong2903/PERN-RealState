import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { FormInput } from "../forms";
import { Button } from "../ui/button";
import useMeStore from "@/zustand/useMeStore";
import { apiSignInWithGoogle } from "@/apis/auth";
import { toast } from "sonner";
import PropTypes from "prop-types";

const formSchema = z
  .object({
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      const { password, confirmPassword } = data;
      return password === confirmPassword;
    },
    {
      message: "Mật khảu không trùng khớp",
      path: ["confirmPassword"],
    }
  );

const SetupPassword = ({ onClose }) => {
  const { googleData, setToken } = useMeStore();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    if (!googleData) return;

    const payload = {
      ...googleData,
      password: data.password,
    };
    const response = await apiSignInWithGoogle(payload);
    console.log("API response:", response);
    if (response?.data?.success) {
      toast.success(response.data.msg || "Thiết lập mật khẩu thành công");
      setToken(response.data.accessToken);
      onClose();
    } else {
      toast.error(response?.data?.msg || "Có lỗi xảy ra");
    }
  };

  return (
    <div className=" text-main">
      <h1 className="text-2xl font-bold mb-4">Thiết lập mật khẩu</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormInput form={form} name="password" label="Mật khẩu" placeholder="password" type="password" />

          <FormInput
            form={form}
            name="confirmPassword"
            label="Nhập lại mật khẩu"
            placeholder="re-password"
            type="password"
          />

          <Button type="submit" size="lg" className="w-full">
            Thiết lập
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SetupPassword;

SetupPassword.propTypes = {
  onClose: PropTypes.func.isRequired,
};
