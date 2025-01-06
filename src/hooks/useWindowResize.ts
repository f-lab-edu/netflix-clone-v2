import { useCallback, useDeferredValue, useEffect, useState } from 'react'

export default function useWindowResize() {
  const [displayWidth, setDisplayWidth] = useState(0)
  const displayWidthDeferred = useDeferredValue(displayWidth)
  const event = useCallback(() => {
    setDisplayWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    event()
    window.addEventListener('resize', event)
    return () => {
      window.removeEventListener('resize', event)
    }
  }, [])
  return [displayWidthDeferred]
}