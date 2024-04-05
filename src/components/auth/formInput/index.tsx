import styles from "./FormInput.module.css";
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
    return (
      <p>
        <motion.input
          variants={variants}
          animate={(isDirty || isSubmitted) && (errors ? "invalid" : "valid")}
          ref={ref}
          className={errors ? styles.invalid_input : styles.input}
          {...props}
        />
        {errors && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ color: "var(--error)", opacity: 1 }}
            className={styles.error_message}
          >
            {errors.message}
          </motion.p>
        )}
      </p>
    );
  }
);
