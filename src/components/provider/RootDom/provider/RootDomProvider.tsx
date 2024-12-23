import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import RootDomProviderContext from './RootDomProviderContext';

export interface RootDomProviderProps {
  children: ReactNode
  selector?: string
}

export const RootDomProvider = ({ children, selector }: RootDomProviderProps) => {
  const [root, setRootDom] = useState<Element>(document.body)
  useEffect(() => {
    setRootDom(document.querySelector(selector || '#__next') || document.body)
  }, [selector])
  const context = {
    getRootDom: () => root
  }

  return <RootDomProviderContext.Provider value={context}>
    {children}
  </RootDomProviderContext.Provider>
}