import { MutableRefObject, RefObject, useContext, useEffect } from "react";
import { ScrollAnimationOnceContext } from "./ScrollAnimationOnceProvider";

export function useScrollAnimationOnceRef(
  ref: React.MutableRefObject<HTMLElement> | null
) {
  const animationObserver = useContext(ScrollAnimationOnceContext);
  useEffect(() => {
		if (!ref || !ref.current) return;
    if (!animationObserver) return;
    animationObserver.observe(ref.current);
    return () => {
			if (!ref.current) return;
      animationObserver.unobserve(ref.current);
    };
  }, []);
}
