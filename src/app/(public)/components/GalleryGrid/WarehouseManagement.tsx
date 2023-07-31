import image from "public/Warehouse+Management.png";
import Image from "next/image";
import ObservedContainer from "@/components/ObservedContainer";

export default function WarehouseManagement() {
  const list1 = [
    "Optimization",
    "Dashboard",
    "Capacity Metrics",
    "Mission Planning",
  ];
  const list2 = ["Barcode Scanning", "Mission Execution"];
  return (
    <ObservedContainer className="relative text-black group overflow-hidden">
      {({ height }) => (
        <>
          <Image src={image} alt="Dexter screenshot" />

          <div
            className="absolute bottom-[6%] left-[8%] flex flex-col font-bold showup"
            style={{ fontSize: height / 20 }}
          >
            <label>Warehouse Management</label>
            <label>Control Systems</label>
          </div>
          <ul
            className="absolute w-full left-[8%] bottom-[28%] text-[#71e3f3]  origin-bottom-left -rotate-[6deg] font-bold flex"
            style={{
              fontSize: height / 45,
              gap: height / 19.3,
            }}
          >
            {list1.map((item, i) => (
              <li
                key={item}
                style={{ transitionDelay: `${50 * i}ms` }}
                className="showup"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul
            className="absolute w-fit right-[2%] bottom-[35%] text-[#71e3f3]  origin-bottom-left rotate-[35deg] font-bold flex"
            style={{
              fontSize: height / 45,
              gap: height / 19.3,
            }}
          >
            {list2.map((item, i) => (
              <li
                key={item}
                style={{ transitionDelay: `${50 * (i + list1.length)}ms` }}
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
