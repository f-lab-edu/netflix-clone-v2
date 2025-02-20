import { useContext, useMemo } from 'react'
import WindowResizedProviderContext from '../provider/WindowResizeProviderContext'

export default function useWindowSize() {
  const context = useContext(WindowResizedProviderContext)
  if (!context) {
    throw new Error('Wrong position: WindowResizeProvider is not defined')
  }
  const isLarge = useMemo(() => context.width > 1050, [context.width])
  return {
    ...context,
    isLarge
  }
}
