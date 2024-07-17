import { useState, useEffect } from "react";
import { useReactiveVariable } from "./useReactiveVariable";

export const useMediaQuery = (
  query: string,
  callback: Function = () => {}
): [boolean, React.MutableRefObject<any>] => {
	const [matches, matchesRef, setMatches] = useReactiveVariable(false);

  const handleChange = (e: MediaQueryListEvent) => {
    setMatches(e.matches);
    if (callback && e.matches) {
      callback(e);
    }
  };

  useEffect(() => {
    const m = window.matchMedia(query);

    setMatches(m.matches);

    m.addEventListener("change", handleChange);

    return () => {
      m.removeEventListener("change", handleChange);
    };
  }, []);

  return [matches, matchesRef];
};
