import { useCallback, useRef, useState } from 'react';

export function useDebounceState<T>(initValue: T, delay: number, options?: {
  clearAll?: boolean
}): [T, (_input: T) => void] {
  const [debouncedValue, setDebouncedValue] = useState<T>(initValue);
  const value = useRef<T>(initValue)
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined)

  const setState = useCallback((input: T) => {
    value.current = input

    if (options?.clearAll) {
      clearTimeout(timeout.current)
      timeout.current = undefined
    }
    if (timeout.current) return

    timeout.current = setTimeout(() => {
      setDebouncedValue(value.current)
      timeout.current = undefined
    }, delay)

  }, [delay, options])

  return [debouncedValue, setState];
}
