"use client";
import { motion } from "framer-motion";
import styles from "./bannerTitle.module.css";
export default function BannerTitle() {
  return (
    <motion.div
      className={styles.banner_title}
      initial={{ x: -120 }}
      animate={{ x: 0, transition: { type: "spring", duration: 1 } }}
    >
      <h3>👋 HELLO</h3>
      <h1>Insights about my personal and work life, and the in betweens</h1>
    </motion.div>
  );
}
