"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedLink({
  children,
  href,
  active,
}: Readonly<{
  children: React.ReactNode;
  href: string;
  active: boolean;
}>) {
  const defaultClasses = "my-4 px-1";
  const MotionLink = motion(Link);
  return (
    <MotionLink
      whileHover={{
        transition: { duration: 0.5, type: "spring" },
        color: "var(--blue-500)",
      }}
      className={`${active && "text-blue-500"} ${defaultClasses}`}
      href={href}
    >
      {children}
    </MotionLink>
  );
}
