import { useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react'

export default function useWindowResize() {
  const [displayWidth, setDisplayWidth] = useState(0)
  const displayWidthDeferred = useDeferredValue(displayWidth)
  const isLarge = useMemo(() => displayWidthDeferred > 1050, [displayWidthDeferred])

  const event = useCallback(() => {
    setDisplayWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    event()
    window.addEventListener('resize', event)
    return () => {
      window.removeEventListener('resize', event)
    }
  }, [event])
  return {
    displayWidthDeferred,
    isLarge
  }
}