import { useEffect } from 'react'
import { useWindowHeight, useWindowWidth } from '.'
import { useDebounce } from '@/hooks/useDebounce'

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
  })
}