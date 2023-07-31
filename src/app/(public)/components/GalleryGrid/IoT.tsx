import image from "public/Internet+of+Things.png";
import Image from "next/image";
import ObservedContainer from "@/components/ObservedContainer";

export default function IoT() {
  const list = [
    "Retail",
    "Manufacturing",
    "Warehouse",
    "Business Insights",
    "Custom ERP",
    "Retail",
  ];
  return (
    <ObservedContainer className="relative text-black font-bold group overflow-hidden">
      {({ height }) => (
        <>
          <Image src={image} alt="Dexter screenshot" />

          <div
            className="absolute bottom-[6%] right-[12%] "
            style={{ fontSize: height / 15 }}
          >
            <label className="showup">Internet Of Things</label>
          </div>
          <ul
            className="absolute  right-[5.5%] top-[43%] text-black  origin-bottom-left flex flex-col items-end"
            style={{
              fontSize: height / 40,
              gap: height / 80,
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
