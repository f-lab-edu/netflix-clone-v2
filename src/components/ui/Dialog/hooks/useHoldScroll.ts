import { useEffect, useMemo } from 'react'
import useRootDom from '@/provider/RootDom/hooks/useRootDom'

export default function useHoldBackWindow(rootDom?: HTMLElement | null) {
  const {
    getRootDom
  } = useRootDom()
  const rootDomEl = useMemo(() => rootDom || getRootDom() || document.body, [rootDom, getRootDom])
  useEffect(() => {
    let scrolled = 0
    if (rootDomEl.scrollTop) scrolled = rootDomEl.scrollTop
    rootDomEl.style.setProperty('width', '100%')
    rootDomEl.style.setProperty('position', 'fixed')
    rootDomEl.style.setProperty('overflow', 'hidden')
    rootDomEl.style.setProperty('top', `-${scrolled}px`)
    return () => {
      rootDomEl.style.removeProperty('width')
      rootDomEl.style.removeProperty('position')
      rootDomEl.style.removeProperty('overflow')
      rootDomEl.style.removeProperty('top')
      rootDomEl.scrollTo({
        top: scrolled
      })
    }
  }, [rootDomEl])
}