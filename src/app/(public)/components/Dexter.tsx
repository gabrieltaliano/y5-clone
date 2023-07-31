import Image from "next/image";
import dexterImage1 from "public/Screen+Shot+2021-08-17+at+4.15.11+PM.png";
import dexterImage2 from "public/tree2.png";

export default function Dexter() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 items-center justify-items-center bg-white text-neutral-900 z-20 relative p-10">
      <div className="pers">
        <div className="relative w-[40vw] aspect-video tres">
          <Image
            src={dexterImage1}
            alt="Dexter screenshot"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label>
          “Deliver and request money in short cycles. Reduce the cost and risk
          to run a cycle. Increase the speed of your cycle. Increase the values,
          alignment, qualities obtained each cycle. Increase how much you and
          your teams enjoy it, because the cycles never end.”
        </label>
        <label className="font-bold">Y5 guiding principles</label>
      </div>

      <div className="flex flex-col gap-4">
        <label>
          “…it’s a powerful tool indeed, and will create many efficiencies
          across our growing business. I see it as our first foray into Big Data
          as a small business, thanks for your efforts and expertise on this!”
        </label>
        <label className="font-bold">KYNE LARKIN, CEO WHITES POWERSPORTS</label>
      </div>
      <div className="relative w-[20vw] h-auto">
        <Image
          src={dexterImage2}
          alt="Dexter tree"
          //   fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
