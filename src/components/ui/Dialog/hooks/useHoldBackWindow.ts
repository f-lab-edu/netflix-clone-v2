import { useEffect } from 'react'

export default function useScrollLockByRootDom(eventState: boolean, prevState: boolean, rootDom: HTMLElement | null) {
  useEffect(() => {
    if (eventState) {
      const scrolled = window.scrollY
      rootDom?.style.setProperty('width', '100%')
      rootDom?.style.setProperty('position', 'fixed')
      rootDom?.style.setProperty('overflow', 'hidden')
      rootDom?.style.setProperty('top', `-${scrolled}px`)
    } else {
      rootDom?.style.removeProperty('width')
      rootDom?.style.removeProperty('position')
      rootDom?.style.removeProperty('overflow')
      rootDom?.style.removeProperty('top')
    }
  }, [eventState, rootDom])
}