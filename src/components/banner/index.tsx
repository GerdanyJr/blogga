import styles from "./banner.module.css";
import { BloggaLogo } from "../../../public/assets/svg";
import Link from "next/link";
import { BannerActions } from "./bannerActions/BannerActions";
import AnimatedLink from "./animatedLink";
import { NavBar } from "./navBar";

export function Banner() {
  return (
    <div className={styles.banner}>
      <header className={styles.header}>
        <Link href="/">
          <BloggaLogo />
        </Link>
        <NavBar />
        <BannerActions />
      </header>

      <div className={styles.banner_title}>
        <h3>👋 HELLO</h3>
        <h1>Insights about my personal and work life, and the in betweens</h1>
      </div>
    </div>
  );
}
