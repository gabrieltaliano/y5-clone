"use client";
import ActiveLink from "./ActiveLink";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isRootPath = pathname === "/";
  const activeClass = isRootPath
    ? "border-b border-orange-500"
    : "border-b border-orange-500";
  return (
    <nav className="w-full z-20 flex gap-6 p-8 backdrop-blur-2xl justify-evenly text-orange-500 font-bold">
      {/* <Link href="/">Home</Link>
      <Link href="/">Technologies</Link>
      <Link href="/">Industries</Link>
      <Link href="/">People we work with</Link>
      <Link href="/">Contact</Link> */}
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
  );
}
