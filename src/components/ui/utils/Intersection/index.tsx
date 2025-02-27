import type { IntersectionCallback } from './lib';
import type { ReactElement, RefCallback } from 'react';
import { cloneElement } from 'react';
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
  const callback: IntersectionCallback = (v) => {
    if (typeof thresholds === 'number') {
      if (v.intersectionRatio >= thresholds) onVisible(v)
    } else {
      onVisible(v)
    }
  }
  const { ref } = useIntersection(callback)
  return cloneElement(children, { ref: ref })
}