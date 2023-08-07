import Image, { StaticImageData } from "next/image";
import Legend from "../components/Legend";
import Link from "next/link";
import assetAltitude from "public/Asset Altitude.jpeg";
import automate from "public/Automate-X.png";
import jSwap from "public/J.Swap Contractors.png";
import analyticaLaboratories from "public/Analytica Laboratories.png";
import whitesPowersports from "public/Whites Powersports.png";
import architectural from "public/Architectural Profiles Ltd (APL).png";
import genesisEnergy from "public/Genesis Energy.jpeg";
import metService from "public/MetService.png";
import espressoRoad from "public/Espresso Road.jpg";
import timberlands from "public/Timberlands Limited.png";
import normans from "public/Normans Transport & Storage Ltd.jpeg";

export default function page() {
  type article = {
    img: StaticImageData;
    title: string;
    href: string;
  };
  const articles: article[] = [
    {
      img: assetAltitude,
      title: "Asset Altitude",
      href: "https://assetaltitude.com/",
    },
    {
      img: automate,
      title: "Automate-X",
      href: "https://automate-x.nz/",
    },
    {
      img: jSwap,
      title: "J.Swap Contractors",
      href: "https://jswap.co.nz/",
    },
    {
      img: analyticaLaboratories,
      title: "Analytica Laboratories",
      href: "https://www.analytica.co.nz/",
    },
    {
      img: whitesPowersports,
      title: "Whites Powersports",
      href: "https://www.whitespowersports.com/",
    },
    {
      img: architectural,
      title: "Architectural Profiles Ltd (APL)",
      href: "https://www.aplnz.co.nz/",
    },
    {
      img: genesisEnergy,
      title: "Genesis Energy",
      href: "https://www.genesisenergy.co.nz/",
    },
    {
      img: metService,
      title: "MetService",
      href: "https://espressoroad.co.nz/",
    },
    {
      img: espressoRoad,
      title: "Espresso Road",
      href: "https://espressoroad.co.nz/",
    },
    {
      img: timberlands,
      title: "Timberlands Limited",
      href: "https://www.tll.co.nz/",
    },
    {
      img: normans,
      title: "Normans Transport & Storage Ltd",
      href: "https://normans.co.nz/",
    },
  ];

  const Article = ({ img, title, href }: article) => (
    <article className="flex flex-col aspect-square gap-2 text-center text-sm text-neutral-600">
      <Link href={href} target="_blanc">
        <div className="relative aspect-square">
          <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
      </Link>
      <h3 className="text-lg pr-4">{title}</h3>
    </article>
  );
  return (
    <div className="flex flex-col gap-32 text-black mt-32 w-full">
      <Legend
        text="Y5 create data rich systems that are easy to use. We are a small
        software development studio making a big impact."
      />
      <section className="grid grid-cols-5 gap-8 w-full p-16">
        {articles.map((article: article) => (
          <Article {...article} key={article.title} />
        ))}
      </section>
    </div>
  );
}
