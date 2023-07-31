"use client";
import ActiveLink from "@/app/(public)/components/ActiveLink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "public/logo.png";

export default function NavBar() {
  const pathname = usePathname();
  const isRootPath = pathname === "/";
  const activeClass = isRootPath
    ? "border-b border-white"
    : "border-b border-black";

  return (
    <>
      {!isRootPath && (
        <div className="absolute left-2 top-6 h-10 aspect-square mra">
          <Image src={logo} alt="logo" fill />
        </div>
      )}
      <nav
        className={`absolute top-0 z-20 flex gap-6 p-8 ${
          isRootPath ? "text-white" : "text-black"
        }`}
      >
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
        <ActiveLink href="/4" activeClassName={activeClass}>
          Contact
        </ActiveLink>
      </nav>
    </>
  );
}
