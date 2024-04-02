import styles from "./banner.module.css";
import { BloggaLogo } from "../../../public/assets/svg";
import Link from "next/link";
import { BannerActions } from "./bannerActions/BannerActions";
import AnimatedLink from "./animatedLink";

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
              <AnimatedLink href="#">Design</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="#">Daily Updates</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="#">Tutorials</AnimatedLink>
            </li>
            <li>
              <AnimatedLink href="#">Library</AnimatedLink>
            </li>
          </ul>
        </nav>
        <BannerActions />
      </header>

      <div className={styles.banner_title}>
        <h3>👋 HELLO</h3>
        <h1>Insights about my personal and work life, and the in betweens</h1>
      </div>
    </div>
  );
}
