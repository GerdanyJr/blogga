"use client";
import { motion } from "framer-motion";
import styles from "./bannerActions.module.css";

export function BannerActions() {
  return (
    <div className={styles.actions}>
      <motion.button
        type="button"
        className={styles.subscribe_button}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        Subscribe
      </motion.button>
    </div>
  );
}
