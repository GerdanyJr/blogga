"use client";
import { motion } from "framer-motion";
export default function BannerTitle() {
  return (
    <motion.div
      className="px-8 py-32  text-white"
      initial={{ x: -120 }}
      animate={{ x: 0, transition: { type: "spring", duration: 1 } }}
    >
      <h3 className="font-medium">👋 HELLO</h3>
      <h1 className="text-4xl">
        Insights about my personal and work life, and the in betweens
      </h1>
    </motion.div>
  );
}
