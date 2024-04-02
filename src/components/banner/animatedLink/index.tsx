"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./animatedLink.module.css";

export default function AnimatedLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      whileHover={{
        transition: { duration: 0.5, type: "spring" },
        color: "var(--blue-500)",
      }}
      className={styles.a}
      href={href}
    >
      {children}
    </MotionLink>
  );
}
