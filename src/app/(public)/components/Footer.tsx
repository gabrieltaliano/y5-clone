import Link from "next/link";

export default function Footer() {
  return (
    <nav className="w-full z-20 flex gap-6 p-8 backdrop-blur-2xl justify-evenly text-orange-500">
      <Link href="/">Home</Link>
      <Link href="/">Technologies</Link>
      <Link href="/">Industries</Link>
      <Link href="/">People we work with</Link>
      <Link href="/">Contact</Link>
    </nav>
  );
}
