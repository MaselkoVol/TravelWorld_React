import { useState, useEffect } from "react";

export function useIsImageLoaded(src: string | undefined): boolean {
	
	const [loaded, setLoaded] = useState(false);
  useEffect(() => {
		if (!src) return;
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
			setLoaded(true);
    };
  }, [src]);

  return loaded;
}
