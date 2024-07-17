import { useState, useRef, MutableRefObject } from "react";

export function useReactiveVariable<T>(startValue: T): [T, MutableRefObject<T>, (value: T) => void] {
  const [renderValue, setRenderValue] = useState<T>(startValue);
  const currentValue = useRef<T>(renderValue);

  function setValue(value: T) {
    setRenderValue(value);
    currentValue.current = value;
  }

  return [renderValue, currentValue, setValue];
}