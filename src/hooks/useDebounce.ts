import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [loadingDebounce, setLoadingDebounce] = useState(false);

  useEffect(() => {
    setLoadingDebounce(true);
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
      setLoadingDebounce(false);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return { debouncedValue, loadingDebounce };
};
