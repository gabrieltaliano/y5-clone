import Image, { StaticImageData } from "next/image";
import truck from "public/truck4.jpg";
import forestry from "public/Forestry.jpeg";
import retail from "public/Retail.jpeg";
import agriculture from "public/Agriculture.jpeg";
import transportation from "public/Transportation.jpeg";
import warehousing from "public/Warehousing.jpeg";
import distribution from "public/Distribution.jpeg";
import manufacturing from "public/Manufacturing.jpeg";
import energy from "public/Energy and Utilities.jpeg";

type article = {
  img: StaticImageData;
  title: string;
  description: string;
};
const articles: article[] = [
  {
    img: forestry,
    title: "Forestry",
    description:
      "From nursery to export we help everyone involved tracking the efficient production and transportation of plant products.",
  },
  {
    img: retail,
    title: "Retail",
    description:
      "Speed, agility and efficiency. Electronic inventory control system, a central database, a point of sales system and an automated statistical forecasting system.",
  },
  {
    img: agriculture,
    title: "Agriculture",
    description:
      "We help companies better manage crops and animals through data driven systems and operational tools.",
  },
  {
    img: transportation,
    title: "Transportation",
    description:
      "From nursery to export we help everyone involved tracking the efficient production and transportation of plant products.",
  },
  {
    img: warehousing,
    title: "Warehousing",
    description:
      "Capacity planning, efficient movements, barcode scanning, pick and pack processes and dashboards help drive an efficient warehouse. We build all the components of a Warehouse Management System.",
  },
  {
    img: distribution,
    title: "Distribution, Logistics and Supply Chain",
    description:
      "Capacity planning, efficient movements, barcode scanning, pick and pack processes and dashboards help drive an efficient warehouse. We build all the components of a Warehouse Management System.",
  },
  {
    img: manufacturing,
    title: "Manufacturing",
    description:
      "We help streamline processes to help ensure maximum productivity by mapping workflows, tracking bottlenecks and providing insight into processes.",
  },
  {
    img: energy,
    title: "Energy and Utilities",
    description:
      "Managing assets, inspecting, and operating distribution, generation and retail systems require coordinated software tools, predictive models and support agreements.",
  },
];

const Article = ({ img, title, description }: article) => (
  <article className="min-h-[100vh] flex flex-col gap-1">
    <div className="relative aspect-[5/7]">
      <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
    </div>
    <h3 className="text-lg pr-4">{title}</h3>
    <p className="text-sm pr-4">{description}</p>
  </article>
);

export default function page() {
  return (
    <div className="text-black mt-32 p-8">
      <section className="grid grid-cols-3 w-full">
        {articles.map((article: article) => (
          <Article {...article} key={article.title} />
        ))}
      </section>

      <section className="grid grid-cols-2 items-center p-8 max-w-6xl mx-auto h-screen">
        <p className="p-8 text-2xl leading-10">
          We work to help people do better. We design more efficient systems.
          Let&apos;s take a new product to market. Automate and transform your
          business.
        </p>
        <div className="relative aspect-square flex flex-col justify-center p-4">
          <Image
            src={truck}
            alt="trc"
            className=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </div>
  );
}
