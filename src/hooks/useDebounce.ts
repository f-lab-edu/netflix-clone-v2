import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useRef, useState } from 'react';

export function useDebounceState<T>(initValue: T, delay: number): [T, Dispatch<SetStateAction<T>>] {
  const [debouncedValue, setDebouncedValue] = useState<T>(initValue);
  const setState = useDebounce(setDebouncedValue, delay)
  return [debouncedValue, setState];
}

export function useDebounce<T extends (..._args: any[]) => void>(action: T, delay: number): T {
  const before = useRef<NodeJS.Timeout | undefined>(undefined)
  const debounce = useCallback((...args: Parameters<T>) => {
    clearTimeout(before.current)
    before.current = setTimeout(() => {
      action(...args)
    }, delay)
  }, [action, delay])
  return debounce as T
}