import Image from "next/image";
import backgroundImage from "public/vivid_bg.jpg";

export default function MainBackground() {
  return (
    <div className="sticky z-0 w-full h-screen top-0">
      <div className="relative w-full h-screen">
        <Image
          src={backgroundImage}
          alt="Main background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
