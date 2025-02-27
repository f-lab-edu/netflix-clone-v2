import type { IntersectionCallback } from './lib';
import type { ReactElement, RefCallback } from 'react';
import { cloneElement } from 'react';
import useIntersection from './hook';

interface IntersectionProps {
  children: ReactElement<{ ref: RefCallback<Element | null> }>
  onVisible: IntersectionCallback
}

export default function Intersection({
  children,
  onVisible
}: IntersectionProps) {
  const { ref } = useIntersection(onVisible)
  return cloneElement(children, { ref: ref })
}