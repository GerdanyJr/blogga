"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./animatedLink.module.css";

export default function AnimatedLink({
  children,
  href,
  active,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  active: boolean;
}>) {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      whileHover={{
        transition: { duration: 0.5, type: "spring" },
        color: "var(--blue-500)",
      }}
      className={(styles.a, active ? styles.active : "")}
      href={href}
    >
      {children}
    </MotionLink>
  );
}
