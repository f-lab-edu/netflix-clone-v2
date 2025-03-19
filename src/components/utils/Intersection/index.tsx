import type { IntersectionOptions } from './hook';
import type { ReactElement, RefCallback } from 'react';
import { cloneElement } from 'react';
import useIntersection from './hook';

interface IntersectionProps extends IntersectionOptions {
  children: ReactElement<{ ref: RefCallback<Element | null> }>
}

export default function Intersection({
  children,
  ...hookOptions
}: IntersectionProps) {
  const { ref } = useIntersection(hookOptions)
  return cloneElement(children, { ref: ref })
}
