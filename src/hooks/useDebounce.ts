import { useCallback, useRef, useState } from 'react';

export function useDebounceState<T>(initValue: T, delay: number): [T, (_input: T) => void] {
  const [debouncedValue, setDebouncedValue] = useState<T>(initValue);
  const value = useRef<T>(initValue)
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined)

  const setState = useCallback((input: T) => {
    value.current = input

    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setDebouncedValue(value.current)
    }, delay)
  }, [delay])

  return [debouncedValue, setState];
}

export function useDebounce<T extends (..._args: unknown[]) => void>(action: T, delay: number): T {
  const before = useRef<NodeJS.Timeout | undefined>(undefined)
  const debounce = useCallback((...args: Parameters<T>) => {
    clearTimeout(before.current)
    before.current = setTimeout(() => {
      action(...args)
    }, delay)
  }, [action, delay])
  return debounce as T
}