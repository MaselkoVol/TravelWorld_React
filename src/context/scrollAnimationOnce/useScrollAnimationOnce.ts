import { useContext, useEffect } from "react";
import { ScrollAnimationOnceContext } from "./ScrollAnimationOnceProvider";

function useScrollAnimationOnce(selector?: string) {
	const animationObserver = useContext(ScrollAnimationOnceContext);
  useEffect(() => {
		if (!animationObserver) return;

    let animatedElementsArray: Element[] = [];
      const animatedElementsList = document.querySelectorAll(
        selector
          ? selector
          : "._scroll-animation-once"
      );
      animatedElementsArray = Array.from(animatedElementsList);
      animatedElementsArray.forEach((elem) => animationObserver.observe(elem));

    return () => {
      animatedElementsArray.forEach((elem) => {
        if (elem) {
          animationObserver.unobserve(elem);
        }
      });
    };
  }, []);
}

export default useScrollAnimationOnce;
