import type { IntersectionCallback } from '@/components/utils/Intersection/lib';
import { useEffect } from 'react';
import { observe, unobserve } from '@/components/utils/Intersection/lib';
import useCallbackRef from '@/hooks/useCallbackRef';
import { useDebounce } from '@/hooks/useDebounce';

export default function useIntersection(callback: IntersectionCallback) {
  const [refState, setRefState] = useCallbackRef<Element | null>(null)
  const debounceCallback = useDebounce(callback, 100)
  useEffect(() => {
    if (refState) observe(refState, debounceCallback)
    return () => {
      if (refState) unobserve(refState)
    }
  }, [refState, debounceCallback])
  return {
    ref: setRefState
  }
}