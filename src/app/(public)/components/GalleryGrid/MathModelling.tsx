import image from "public/Mathematical+Modelling.png";
import Image from "next/image";
import ObservedContainer from "@/components/ObservedContainer";

export default function MathModelling() {
  const list = [
    "Predictive",
    "Simulation",
    "Machine learning",
    "Physical modelling",
    "Statistical methods",
    "Artificial intelligence",
  ];
  return (
    <ObservedContainer className="relative text-black overflow-hidden group  w-full">
      {({ height }) => (
        <>
          <Image src={image} alt="Dexter screenshot" />

          <label
            className="absolute top-[34%] left-[3.8%] showup"
            style={{ fontSize: height / 14 }}
          >
            Mathematical Modelling
          </label>
          <ul
            className="absolute w-full left-[35%] top-[0.5%] text-black flex flex-col"
            style={{
              fontSize: height / 35,
              gap: height / 160,
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
