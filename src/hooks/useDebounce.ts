import { useEffect, useRef, useState } from "react";

const useDebounce = (
  timeout: number
): [string, string, React.Dispatch<React.SetStateAction<string>>] => {
  const timeoutId = useRef(0);
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => clearTimeout(timeoutId.current);
  }, [timeout, value]);

  return [value, debouncedValue, setValue];
};

export default useDebounce;
