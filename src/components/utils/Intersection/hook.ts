import { useEffect } from 'react';
import useCallbackRef from '@/hooks/useCallbackRef';

export type IntersectionCallback = (_isVisible: boolean, _threshold: number) => void

const observerActions = new WeakMap<Element, boolean>()

export interface IntersectionOptions {
  root?: Element | Document | null,
  rootMargin?: string
  thresholds?: number | number[]
  onVisible: IntersectionCallback
}

export default function useIntersection({ onVisible, thresholds = [], ...intersectionOptions }: IntersectionOptions) {
  const [refState, setRefState] = useCallbackRef<Element | null>(null)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (!refState) return
    observerActions.set(refState, false)
    const tempThresHolds = Array.isArray(thresholds) ? thresholds : [thresholds]
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const isVisible = entry.isIntersecting && tempThresHolds.some(v => v <= entry.intersectionRatio)
        if (observerActions.get(refState) !== isVisible) {
          observerActions.set(refState, isVisible)
          onVisible(isVisible, entry.intersectionRatio)
        }
      })
    }, { ...intersectionOptions, threshold: tempThresHolds })
    observer.observe(refState)
    return () => {
      observer.unobserve(refState)
    }
  }, [refState, onVisible, thresholds, intersectionOptions])
  return {
    ref: setRefState
  }
}
