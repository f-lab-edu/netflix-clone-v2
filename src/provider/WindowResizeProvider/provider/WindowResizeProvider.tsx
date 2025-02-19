import type { WindowResizeProviderContextType } from './WindowResizeProviderContext';
import type { ReactNode } from 'react';
import { useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react';
import WindowResizeProviderContext from './WindowResizeProviderContext';

export interface RootDomProviderProps {
  children: ReactNode
}

export default function WindowResizeProvider({ children }: RootDomProviderProps) {
  const [size, setSize] = useState<WindowResizeProviderContextType>({
    width: 0,
    height: 0
  })
  const deferredSize = useDeferredValue(size)

  const event = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  useEffect(() => {
    event()
    window.addEventListener('resize', event)
    return () => {
      window.removeEventListener('resize', event)
    }
  }, [event])

  const providerValue = useMemo(() => deferredSize, [deferredSize])

  return <WindowResizeProviderContext.Provider value={providerValue}>
    {children}
  </WindowResizeProviderContext.Provider>
}