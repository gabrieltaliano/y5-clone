import { stack } from "@/app/admin/components/StackEditor";
import Image from "next/image";

export default function TechnologyItem({ technology }: { technology: stack }) {
  return (
    <div className="flex flex-col relative max-w-xs items-center">
      <div className="relative w-full aspect-square">
        <Image
          fill
          className="object-contain"
          src={technology.imgURL}
          alt="preview"
        />
      </div>
      <h2 className="uppercase  text-2xl">{technology.title}</h2>
      <label className="leading-4 text-sm text-slate-600 text-center">
        {technology.description}
      </label>
    </div>
  );
}
