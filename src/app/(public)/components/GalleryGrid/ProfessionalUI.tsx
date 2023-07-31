import image from "public/Professional+User+Interface.png";
import Image from "next/image";
import ObservedContainer from "@/components/ObservedContainer";

export default function ProfessionalUI() {
  const list = [
    "OmniSearch",
    "Pinned items",
    "Virtual canvas",
    "Frozen headers",
    "Stacking filters",
    "Realtime statistics",
  ];

  return (
    <ObservedContainer className="relative text-black group overflow-hidden">
      {({ height }) => (
        <>
          <Image src={image} alt="Dexter screenshot" />

          <label
            className="absolute top-[50%] left-[25%] showup"
            style={{ fontSize: height / 14 }}
          >
            Professional User Interface
          </label>

          <ul
            className="absolute right-[11.2%] top-[5%] text-orange-600 flex flex-col items-end font-bold"
            style={{
              fontSize: height / 35,
              gap: height / 100,
            }}
          >
            {list.map((item, i) => (
              <li
                key={item}
                style={{ transitionDelay: `${50 * i}ms` }}
                className="showup"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </ObservedContainer>
  );
}
