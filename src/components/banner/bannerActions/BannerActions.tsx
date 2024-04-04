"use client";
import { motion } from "framer-motion";
import styles from "./bannerActions.module.css";
import { useRouter } from "next/navigation";

export function BannerActions() {
  const router = useRouter();
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
        onClick={() => router.push("/auth")}
      >
        Subscribe
      </motion.button>
    </div>
  );
}
