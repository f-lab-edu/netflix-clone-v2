import type { WindowResizeProviderContextType } from './WindowResizeProviderContext';
import type { ReactNode } from 'react';
import { useCallback, useEffect } from 'react';
import WindowResizeProviderContext from './WindowResizeProviderContext';
import { useDebounceState } from '@/hooks/useDebounce';

export interface RootDomProviderProps {
  children: ReactNode
}

export default function WindowResizeProvider({ children }: RootDomProviderProps) {
  const [size, setSize] = useDebounceState<WindowResizeProviderContextType>({
    width: 0,
    height: 0
  }, 100)

  const event = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [setSize])

  useEffect(() => {
    event()
    window.addEventListener('resize', event)
    return () => {
      window.removeEventListener('resize', event)
    }
  }, [event])

  return <WindowResizeProviderContext.Provider value={size}>
    {children}
  </WindowResizeProviderContext.Provider>
}