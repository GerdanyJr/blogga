"use client";

import { usePathname } from "next/navigation";
import AnimatedLink from "../animatedLink";

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex text-white gap-4">
        <li>
          <AnimatedLink href="/" active={pathname === "/home"}>
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
