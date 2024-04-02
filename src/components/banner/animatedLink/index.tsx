"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <Link href={href}>
      <motion.a
        whileHover={{
          transition: { duration: 0.5, type: "spring" },
          color: "var(--blue-500)",
        }}
      >
        {children}
      </motion.a>
    </Link>
  );
}
