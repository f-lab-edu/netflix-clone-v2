import { useMemo } from 'react'
import { useWindowWidth } from '@/state/windowSize'

export default function useContentListDisplayWidth() {
  const [width] = useWindowWidth()
  const displayOnce = useMemo(() => {
    if (width >= 1400) return 6
    if (width >= 1100) return 5
    if (width >= 800) return 4
    if (width >= 500) return 3
    return 2
  }, [width])

  const itemWidth = useMemo(() => (100 - 8) / displayOnce, [displayOnce])
  return {
    width,
    displayOnce,
    itemWidth
  }
}
