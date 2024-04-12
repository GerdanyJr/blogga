"use client";

import { FormInput } from "@/components/auth/formInput";
import FormButton from "@/components/auth/formButton";
import { AnimatedLink } from "./animatedLink/AnimatedLink";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormHeader } from "./formHeader";

interface Inputs {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(3),
});

export default function SubscribePage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    getFieldState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <FormHeader title="Login" subtitle="To get started" />
      <div className="flex flex-col gap-4">
        <FormInput
          placeholder="E-mail"
          type="email"
          errors={errors.email}
          isDirty={getFieldState("email").isDirty}
          isSubmitted={isSubmitted}
          {...register("email")}
        />
        <FormInput
          placeholder="Password"
          type="password"
          errors={errors.password}
          isDirty={getFieldState("password").isDirty}
          isSubmitted={isSubmitted}
          {...register("password")}
        />
        <AnimatedLink href={""} className="text-[#333333] text-sm">
          Forgot Password?
        </AnimatedLink>
      </div>
      <FormButton type="submit">Login</FormButton>
      <AnimatedLink
        href={"/auth/register"}
        className="text-[#333333] text-sm text-center block mt-8"
      >
        New user? <span className="font-semibold">Register</span>
      </AnimatedLink>
    </form>
  );
}
