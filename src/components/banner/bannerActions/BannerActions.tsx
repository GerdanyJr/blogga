"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function BannerActions() {
  const router = useRouter();
  return (
    <div>
      <motion.button
        type="button"
        className="rounded-md text-white bg-grey px-4 py-2 cursor-pointer"
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => router.push("/auth")}
      >
        Subscribe
      </motion.button>
    </div>
  );
}
