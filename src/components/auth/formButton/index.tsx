"use client";
import React from "react";

import styles from "./formButton.module.css";
import { HTMLMotionProps, motion } from "framer-motion";

interface FormButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export default function FormButton({ children, ...props }: FormButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.button}
      {...props}
    >
      {children}
    </motion.button>
  );
}
