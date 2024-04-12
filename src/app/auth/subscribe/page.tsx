"use client";

import { FormInput } from "@/components/auth/formInput";
import styles from "./subscribePage.module.css";
import FormButton from "@/components/auth/formButton";
import { AnimatedLink } from "./animatedLink/AnimatedLink";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormHeader from "./formHeader";

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormHeader title="Login" subtitle="To get started" />
      <div className={styles.inputs}>
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
        <AnimatedLink href={""} className={styles.forgot_password}>
          Forgot Password?
        </AnimatedLink>
      </div>
      <FormButton type="submit">Login</FormButton>
      <AnimatedLink href={"/auth/register"} className={styles.register}>
        New user? <span>Register</span>
      </AnimatedLink>
    </form>
  );
}
