"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import logo from "public/logo.png";

export default function Footer() {
  const pathname = usePathname();
  const isRootPath = pathname === "/";
  const activeClass = isRootPath
    ? "border-b border-orange-500"
    : "border-b border-orange-500";
  return (
    <nav
      className={`w-full z-20 flex gap-6 p-6 ${
        isRootPath ? "backdrop-blur-2xl" : "bg-blue-900"
      } justify-evenly text-orange-500 font-bold relative`}
    >
      <div className="flex flex-col sm:flex-row gap-2 items-center sm:gap-4 lg:gap-8">
        <ActiveLink href="/" activeClassName={activeClass}>
          Home
        </ActiveLink>
        <ActiveLink href="/technologies" activeClassName={activeClass}>
          Technologies
        </ActiveLink>
        <ActiveLink href="/3" activeClassName={activeClass}>
          Industries
        </ActiveLink>
        <ActiveLink href="/4" activeClassName={activeClass}>
          People we work with
        </ActiveLink>
        <ActiveLink href="/" activeClassName={activeClass}>
          Contact
        </ActiveLink>
      </div>
      <div className="absolute right-6 top-5 h-10 aspect-square z-50">
        <Image src={logo} alt="logo" fill />
      </div>
    </nav>
  );
}
