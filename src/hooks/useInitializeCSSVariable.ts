import { useEffect } from "react";
import { setCSSVariable } from "../utils/functions";

export function useInitializeCSSVariable(
  ref: React.MutableRefObject<unknown>,
  varName: string,
  value: string | undefined
) {
  useEffect(() => {
    if (!value) return;
    setCSSVariable(ref, varName, value);
  }, []);
}
