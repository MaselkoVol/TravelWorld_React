import { useEffect } from "react";

const animationObserverOnce = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("_animated");
    } else {
      entry.target.classList.remove("_animated");
    }
  });
});

function useScrollAnimationOnce() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      "._scroll-animation"
    );
    animatedElements.forEach((elem) => animationObserverOnce.observe(elem));

    return () => {
      animatedElements.forEach((elem) => {
        if (elem) {
          animationObserverOnce.unobserve(elem);
        }
      });
    };
  });
}

export default useScrollAnimationOnce;
