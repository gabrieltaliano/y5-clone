import image from "public/Complex+Data.png";

import Image from "next/image";
import ObservedContainer from "@/components/ObservedContainer";

export default function ComplexData() {
  const list = [
    "OLAP",
    "Graph",
    "Search",
    "Columnar",
    "Time-Series",
    "Messaging",
    "Transactional",
    "Multi-Dimensional",
  ];

  return (
    <ObservedContainer className="relative text-black z-30 overflow-hidden group">
      {({ height }) => (
        <>
          <Image src={image} alt="Dexter screenshot" />

          <div
            className="absolute top-[8%] left-[12%] text-black flex flex-col"
            style={{ fontSize: height / 14 }}
          >
            <label className="showup" >Complex Data</label>
          </div>
          <ul
            className="absolute w-full left-[23%] -bottom-[10%] text-black  origin-bottom-left -rotate-[30deg] font-bold flex flex-col"
            style={{
              fontSize: height / 35,
              gap: height / 80,
            }}
          >
            {list.map((item, i) => {
              const x = -0.3 + ((i + 1) * 2.9) / list.length;
              const y = 2 * x - x * x;
              const r = 3.2 * i + y;
              return (
                <li
                  key={item}
                  className="showup"
                  style={{
                    marginLeft: `${r}%`,
                    transitionDelay: `${50 * i}ms`,
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </ObservedContainer>
  );
}
