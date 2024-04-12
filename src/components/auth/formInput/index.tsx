import { HTMLMotionProps, Variants, motion } from "framer-motion";
import { LegacyRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
const variants: Variants = {
  invalid: {
    x: [-10, 0, 20, 0],
    borderColor: "var(--error)",
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  valid: {
    borderColor: "var(--success)",
  },
};
interface FormInputProps extends HTMLMotionProps<"input"> {
  errors?: FieldError;
  isDirty: boolean;
  isSubmitted: boolean;
}
export const FormInput = forwardRef(
  (
    { errors, isDirty, isSubmitted, ...props }: FormInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    console.log(errors?.message);
    return (
      <div>
        <motion.input
          variants={variants}
          animate={(isDirty || isSubmitted) && (errors ? "invalid" : "valid")}
          ref={ref}
          className={`p-4 w-[25vw] border-[1px] border-grey-200 rounded-xl text-[#333333] outline-none ${
            errors
              ? "placeholder:text-error"
              : "placeholder:text-grey-300"
          }`}
          {...props}
        />
        {errors && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ color: "var(--error)", opacity: 1 }}
            className="mt-1 text-sm"
          >
            {errors.message}
          </motion.p>
        )}
      </div>
    );
  }
);
