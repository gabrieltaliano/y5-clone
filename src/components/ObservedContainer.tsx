import useResizeObserver from "@/hooks/useResizeObserver";
import { useRef } from "react";

export default function ObservedContainer(props: {
  children: ({ height }: { height: number }) => JSX.Element;
  [x: string]: any;
}) {
  const { children, ...rest } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { height } = useResizeObserver(ref);

  return (
    <div ref={ref} {...rest}>
      {children({ height })}
    </div>
  );
}
