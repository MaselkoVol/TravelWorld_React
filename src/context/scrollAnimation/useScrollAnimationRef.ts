import { MutableRefObject, RefObject, useContext, useEffect } from "react";
import { ScrollAnimationContext } from "./ScrollAnimationProvider";

export function useScrollAnimationRef(
  ref: React.MutableRefObject<HTMLElement | null> | null
) {
  const animationObserver = useContext(ScrollAnimationContext);
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
