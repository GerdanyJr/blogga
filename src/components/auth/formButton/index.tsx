"use client";
import React from "react";

import { HTMLMotionProps, motion } from "framer-motion";

interface FormButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

export default function FormButton({ children, ...props }: FormButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-full py-3 text-white bg-blue-800 cursor-pointer rounded-2xl"
      {...props}
    >
      {children}
    </motion.button>
  );
}
