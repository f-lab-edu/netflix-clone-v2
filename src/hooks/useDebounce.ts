import { useCallback, useMemo, useRef, useState } from 'react';

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

export function useDebounce(action: () => void, delay: number) {
  const debounce = useMemo(() => {
    let before: NodeJS.Timeout | undefined
    return () => {
      clearTimeout(before)
      before = setTimeout(() => {
        action()
      }, delay)
    }
  }, [action, delay])
  return debounce
}