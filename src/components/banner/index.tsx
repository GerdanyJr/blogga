import { BloggaLogo } from "../../../public/assets/svg";
import Link from "next/link";
import { BannerActions } from "./bannerActions/BannerActions";
import { NavBar } from "./navBar";
import BannerTitle from "./bannerTitle";

export function Banner() {
  return (
    <div className="bg-blue p-8 rounded-xl">
      <header className="flex justify-between items-center">
        <Link href="/home">
          <BloggaLogo />
        </Link>
        <NavBar />
        <BannerActions />
      </header>
      <BannerTitle />
    </div>
  );
}