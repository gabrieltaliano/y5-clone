import { Alfa_Slab_One, Roboto, Yeseva_One } from "next/font/google";
import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const alfaSlabOne = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--alfaSlabOne-script",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--roboto-script",
});

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
      <body
        className={`${alfaSlabOne.variable} ${roboto.variable} flex min-h-screen flex-col items-center justify-between relative text-white font-roboto`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
