import styles from "./banner.module.css";
import { BloggaLogo } from "../../../public/assets/svg";
import Link from "next/link";
import { BannerActions } from "./bannerActions/BannerActions";
import { NavBar } from "./navBar";
import BannerTitle from "./bannerTitle";

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
      <BannerTitle />
    </div>
  );
}
