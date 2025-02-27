import type { IntersectionCallback } from '@/components/ui/utils/Intersection/lib';
import { useEffect } from 'react';
import { observe, unobserve } from '@/components/ui/utils/Intersection/lib';
import useCallbackRef from '@/hooks/useCallbackRef';

export default function useIntersection(callback: IntersectionCallback) {
  const [refState, setRefState] = useCallbackRef<Element | null>(null)
  useEffect(() => {
    if (refState) observe(refState, callback)
    return () => {
      if (refState) unobserve(refState)
    }
  }, [refState, callback])
  return {
    ref: setRefState
  }
}