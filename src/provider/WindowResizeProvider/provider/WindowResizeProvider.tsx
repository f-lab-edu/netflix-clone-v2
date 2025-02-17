import type { ReactNode } from 'react';
import { useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react';
import WindowResizeProviderContext from './WindowResizeProviderContext';

export interface RootDomProviderProps {
  children: ReactNode
}

export default function WindowResizeProvider({ children }: RootDomProviderProps) {
  const [width, setWidth] = useState<number>(0)
  const deferredWidth = useDeferredValue(width)

  const event = useCallback(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    event()
    window.addEventListener('resize', event)
    return () => {
      window.removeEventListener('resize', event)
    }
  }, [event])

  const providerValue = useMemo(() => ({ width: deferredWidth }), [deferredWidth])

  return <WindowResizeProviderContext.Provider value={providerValue}>
    {children}
  </WindowResizeProviderContext.Provider>
}