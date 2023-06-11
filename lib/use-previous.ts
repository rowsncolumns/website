import { useIsomorphicLayoutEffect } from "@rowsncolumns/spreadsheet";
import type { MutableRefObject } from "react";
import { useRef } from "react";

export function usePrevious<T>(
  value: T
): MutableRefObject<T | undefined>["current"] {
  const ref = useRef<T>();
  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
