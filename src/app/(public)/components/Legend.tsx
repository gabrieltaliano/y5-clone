import Image from "next/image";
import logo from "public/logo.png";

export default function Legend({ text }: { text: string }) {
  return (
    <div className="w-full flex items-center justify-center gap-2 font-mono bg-black h-16 z-10">
      <div className="relative h-8 aspect-square">
        <Image src={logo} alt="logo" fill />
      </div>
      <p className="text-white">{text}</p>
    </div>
  );
}
