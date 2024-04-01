import styles from "./banner.module.css";
import { BloggaLogo } from "@/assets/svg";
import Link from "next/link";

export function Banner() {
  return (
    <div className={styles.banner}>
      <header className={styles.header}>
        <Link href="#">
          <BloggaLogo />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <a href="#">Design Tools</a>
            </li>
            <li>
              <a href="#">Daily Updates</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <button type="button" className={styles.subscribe_button}>
            Subscribe
          </button>
        </div>
      </header>

      <div className={styles.banner_title}>
        <h3>👋 HELLO</h3>
        <h1>Insights about my personal and work life, and the in betweens</h1>
      </div>
    </div>
  );
}
