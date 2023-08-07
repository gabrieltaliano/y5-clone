import Image from "next/image";
import Link from "next/link";
import dexterImage1 from "public/Screen+Shot+2021-08-17+at+4.15.11+PM.png";
import dexterImage2 from "public/tree2.png";

export default function Quotes() {
  return (
    <div className="flex flex-col w-full bg-white items-center  text-neutral-900 z-20 relative px-40 py-32 gap-24">
      <div className="relative self-start m-10">
        <div className="absolute top-0 -translate-y-1/4 left-0 opacity-80 z-0">
          <div className="perspective">
            <div className="relative w-[40vw] aspect-video tres">
              <Image
                src={dexterImage1}
                alt="Dexter screenshot"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 backdrop-blur-[2px] shadow-md p-2">
          <div className="flex flex-col">
            <label>
              “Deliver and request money in short cycles. Reduce the cost and
              risk to run a cycle.
            </label>
            <label>
              Increase the speed of your cycle. Increase the values, alignment,
              qualities obtained each cycle.
            </label>
            <label>
              Increase how much you and your teams enjoy it, because the cycles
              never end.”
            </label>
          </div>
          <label className="font-bold">Y5 guiding principles</label>
        </div>
      </div>

      <div className="relative self-end m-10">
        <div className="relative flex flex-col gap-4 bg-neutral-50/5 backdrop-blur-[2px] shadow-md p-2 z-30">
          <div className="flex flex-col">
            <label>
              “…it’s a powerful tool indeed, and will create many efficiencies
              across our growing business.
            </label>
            <label>
              I see it as our first foray into Big Data as a small business,
              thanks for your efforts and expertise on this!”
            </label>
          </div>
          <label className="font-bold">
            KYNE LARKIN, CEO WHITES POWERSPORTS
          </label>
        </div>
        <div className="absolute top-0 -translate-y-1/4 right-0 opacity-80 z-0">
          <div className="relative w-[20vw] h-auto">
            <Image
              src={dexterImage2}
              alt="Dexter tree"
              //   fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <Link href="/dexter" className="text-orange-500 font-bold">
        Read more about Dexter
      </Link>
    </div>
  );
}
