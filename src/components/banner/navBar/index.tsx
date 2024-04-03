"use client";

import { usePathname } from "next/navigation";
import AnimatedLink from "../animatedLink";
import styles from "./navBar.module.css";

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <AnimatedLink href="/" active={pathname === "/"}>
            Home
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="#" active={pathname === "/daily"}>
            Daily Updates
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="#" active={pathname == "/tutorials"}>
            Tutorials
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="#" active={pathname === "/library"}>
            Library
          </AnimatedLink>
        </li>
      </ul>
    </nav>
  );
}
