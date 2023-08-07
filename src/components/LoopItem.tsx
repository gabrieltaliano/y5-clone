import { MutableRefObject, ReactNode, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";

type Item = {
  children: ReactNode;
  containerRef: MutableRefObject<HTMLDivElement>;
  widthScroll: number;
  isLoop?: boolean;
  style?: {};
  reverse?: boolean;
};

export default function LoopItem({
  children,
  containerRef,
  widthScroll,
  isLoop = false,
  reverse = false,
  style,
}: Item) {
  const observedDiv = useRef<HTMLDivElement>(null!);
  const { ref: inViewRef, inView } = useInView({
    root: containerRef.current,
    threshold: isLoop ? 0.9 : 0.5,
  });

  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      observedDiv.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );
  let styles = isLoop
    ? {
        transform: `translate(${widthScroll * -1}px, 0)`,
        animationDirection: reverse ? "reverse" : "normal",
      }
    : {
        transform: `translate(${widthScroll}px, 0)`,
        animationDirection: !reverse ? "reverse" : "normal",
      };

  styles = { ...styles, ...style };

  return (
    <div
      ref={setRefs}
      style={styles}
      className={`text-2xl h-full relative text-center looping`}
    >
      <div>{children}</div>
    </div>
  );
}
