import { useContext, useEffect } from "react";
import { ScrollAnimationContext } from "./ScrollAnimationProvider";

function useScrollAnimation(selector?: string) {
  const animationObserver = useContext(ScrollAnimationContext);
  useEffect(() => {
    if (!animationObserver) return;

    let animatedElementsArray: Element[] = [];
    const animatedElementsList = document.querySelectorAll(
      selector ? selector : "._scroll-animation"
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

export default useScrollAnimation;
