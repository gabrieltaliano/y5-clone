import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Y5 - Clone",
  description: "by Gabriel Taliano",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="flex min-h-screen flex-col items-center justify-between relative bg-white text-white">
        {children}
      </body>
    </html>
  );
}
