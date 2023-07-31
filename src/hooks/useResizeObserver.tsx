import { MutableRefObject, useEffect, useLayoutEffect, useState } from "react";

export default function useResizeObserver(
  observedDiv: MutableRefObject<HTMLElement | null>
) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  useLayoutEffect(() => {
    if (observedDiv.current !== null) {
      const resizeObserver = new ResizeObserver(() => {
        if (observedDiv.current !== null) {
          setWidth(observedDiv.current.offsetWidth);
          setHeight(observedDiv.current.offsetHeight);
          setScrollWidth(observedDiv.current.scrollWidth);
        }
      });

      resizeObserver.observe(observedDiv.current);

      return function cleanup() {
        resizeObserver.disconnect();
      };
    }
  }, [observedDiv]);

  return { width, height, scrollWidth };
}
