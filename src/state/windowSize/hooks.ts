import { useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useWindowHeight, useWindowWidth } from '.'

export const useWindowResized = () => {
  const [, setWindowWidth] = useWindowWidth()
  const [, setWindowHeight] = useWindowHeight()

  const event = useDebounce(() => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }, 100)

  useEffect(() => {
    event()
    window.addEventListener('resize', event)
    return () => {
      window.removeEventListener('resize', event)
    }
  }, [])
}
