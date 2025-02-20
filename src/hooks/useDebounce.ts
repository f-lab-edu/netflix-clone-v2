import { useCallback, useRef, useState } from 'react';

export function useDebounceState<T>(initValue: T, delay: number): [T, (_input: T) => void] {
  const [debouncedValue, setDebouncedValue] = useState<T>(initValue);
  const value = useRef<T>(initValue)
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined)

  const setState = useCallback((input: T) => {
    value.current = input
    if (!timeout.current) {
      timeout.current = setTimeout(() => {
        setDebouncedValue(value.current)
        timeout.current = undefined
      }, delay)
    }
  }, [delay])

  return [debouncedValue, setState];
}
