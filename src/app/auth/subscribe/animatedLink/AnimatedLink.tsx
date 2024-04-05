"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface AnimatedLinkProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  href: string;
  className: string;
}
const MotionLink = motion(Link);
export function AnimatedLink({ children, href, className }: AnimatedLinkProps) {
  return (
    <MotionLink
      href={href}
      whileHover={{
        scale: 1.1,
        color: "var(--blue-800)",
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={className}
    >
      {children}
    </MotionLink>
  );
}
