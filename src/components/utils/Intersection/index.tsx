import type { IntersectionCallback } from './lib';
import type { ReactElement, RefCallback } from 'react';
import { cloneElement, useCallback, useRef } from 'react';
import useIntersection from './hook';

interface IntersectionProps {
  children: ReactElement<{ ref: RefCallback<Element | null> }>
  onVisible: IntersectionCallback,
  thresholds?: number
}

export default function Intersection({
  children,
  onVisible,
  thresholds
}: IntersectionProps) {
  const intersectionRatio = useRef<number>(0)
  const callback: IntersectionCallback = useCallback((v) => {
    if (intersectionRatio.current === v.intersectionRatio) return
    intersectionRatio.current = v.intersectionRatio

    if (typeof thresholds === 'number') {
      if (
        intersectionRatio.current >= thresholds
      ) {
        onVisible(v)
      }
    } else {
      onVisible(v)
    }
  }, [onVisible, thresholds])
  const { ref } = useIntersection(callback)
  return cloneElement(children, { ref: ref })
}