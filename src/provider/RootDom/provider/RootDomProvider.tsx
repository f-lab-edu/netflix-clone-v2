import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import RootDomProviderContext from './RootDomProviderContext';

export interface RootDomProviderProps {
  children: ReactNode
  selector?: string
}

export const RootDomProvider = ({ children, selector }: RootDomProviderProps) => {
  const defaultRoot = typeof window === 'undefined' ? null : document.body
  const [root, setRootDom] = useState<HTMLElement | null>(defaultRoot)
  useEffect(() => {
    setRootDom(document.querySelector<HTMLElement>(selector || '#__next') || defaultRoot)
  }, [selector, defaultRoot])
  const context = {
    getRootDom: () => root
  }

  return <RootDomProviderContext.Provider value={context}>
    {children}
  </RootDomProviderContext.Provider>
}
