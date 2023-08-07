import dexterImage1 from "public/Screen+Shot+2021-08-17+at+4.15.11+PM.png";
import Link from "next/link";
import Image from "next/image";

export default function Technologies() {
  return (
    <div className="m-12">
      <section className="flex flex-col max-w-6xl gap-16 mt-24 p-16 text-black">
        <h1 className="text-6xl uppercase m-auto">Dexter</h1>
        <div className="relative aspect-video">
          <Image
            src={dexterImage1}
            alt="Dexter screenshot"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2 className="text-5xl">Whites PowerSports</h2>
        <article className="flex flex-col gap-4">
          <p>
            Constraints and a broad objective create the best environment for
            creativity.
          </p>
          <p>
            Y5 was approached by Ian Johnson with an idea: Could we automate the
            information needed to manage purchasing for Whites Powersports?
          </p>
          <p>
            Expectations and timeframe were set. Y5’s background across big
            data, design and delivering what is needed (nothing more) helped us
            navigate through the challenges in this project. Y5 produced a
            design and deployed the first prototype within two weeks.
          </p>
          <p>
            Dexter builds on a custom library developed over summer 2019/2020
            after nearly a decade of research. It queries over 5 million records
            and creates a real-time analytics platform in the browser. Inventory
            and sales demand across warehouses can be merged to generate
            purchase orders for the whole group.
          </p>
          <p>
            After the first version, Dexter went through several changes and
            will continue to adapt to best fit Whites Powersports. A set of
            improvements was signed off last week and we’re in the middle of
            developing these additions.
          </p>
          <p>
            The custom analytics platform that powers Dexter is subscription
            free and already incorporated into several Y5 solutions for clients.
          </p>
        </article>
        <label>
          Do you have a visibility or data challenge in your business?
        </label>
        <Link href="contact" className="font-bold text-orange-500 text-xl">
          Let&apos;s talk
        </Link>
      </section>
    </div>
  );
}
