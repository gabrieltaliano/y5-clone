import image from "public/Enterprise+Resource+Planning.png";
import Image from "next/image";
import ObservedContainer from "@/components/ObservedContainer";

export default function Enterprise() {
  const list = [
    "Retail",
    "Manufacturing",
    "Warehouse",
    "Business Insights",
    "Custom ERP",
    "Retail",
  ];
  return (
    <ObservedContainer className="relative text-black group overflow-hidden">
      {({ height }) => (
        <>
          <Image src={image} alt="Dexter screenshot" />

          <div
            className="absolute bottom-[6%] right-[8%] -rotate-90 text-[#b9dc3d] flex flex-col origin-bottom-right"
            style={{ fontSize: height / 14 }}
          >
            <label className="translate-x-full showup">Enterprise</label>
            <label className="translate-x-full showup">Resource Planning</label>
          </div>
          <ul
            className="absolute w-full left-[15%] bottom-[5%] text-black  origin-bottom-left -rotate-[15deg] font-bold flex flex-col"
            style={{
              fontSize: height / 35,
              gap: height / 19.3,
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
