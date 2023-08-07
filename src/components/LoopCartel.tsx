"use client";
import { ReactNode, useRef } from "react";
import LoopItem from "./LoopItem";
import useResizeObserver from "@/hooks/useResizeObserver";

export default function LoopCartel({
  children,
  inverted = false,
}: {
  children: ReactNode[];
  inverted?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const { scrollWidth } = useResizeObserver(containerRef);

  return (
    <div
      className="w-full h-full relative m-auto overflow-hidden"
      ref={containerRef}
    >
      <div className="w-full grid grid-rows-1 grid-flow-col auto-cols-max justify-between h-full">
        {children!.map((child, i) => (
          <LoopItem
            key={`item ${i}`}
            containerRef={containerRef}
            widthScroll={scrollWidth}
            reverse={inverted}
          >
            {child}
          </LoopItem>
        ))}
      </div>
      <div className="w-full grid grid-rows-1 grid-flow-col auto-cols-max justify-between h-full absolute top-0">
        {children!.map((child, i) => (
          <LoopItem
            key={`item ${i}`}
            style={{ left: `-${scrollWidth}px`, top: 0 }}
            containerRef={containerRef}
            widthScroll={scrollWidth}
            isLoop={false}
            reverse={inverted}
          >
            {child}
          </LoopItem>
        ))}
      </div>
    </div>
  );
}
