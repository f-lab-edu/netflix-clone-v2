import { useEffect, useRef } from 'react'

export default function useHoldBackWindow(eventState: boolean, rootDom: HTMLElement | null) {
  const scrolled = useRef(0)
  useEffect(() => {
    if (window.scrollY) scrolled.current = window.scrollY
    if (eventState) {
      rootDom?.style.setProperty('width', '100%')
      rootDom?.style.setProperty('position', 'fixed')
      rootDom?.style.setProperty('overflow', 'hidden')
      rootDom?.style.setProperty('top', `-${scrolled.current}px`)

    } else {
      rootDom?.style.removeProperty('width')
      rootDom?.style.removeProperty('position')
      rootDom?.style.removeProperty('overflow')
      rootDom?.style.removeProperty('top')
      window.scrollTo({
        top: scrolled.current
      })
    }
  }, [eventState, rootDom])
}