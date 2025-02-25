import type { DialogContent, DialogObj, DialogRect, ValueType } from './context';
import type { ReactNode } from 'react';
import { AnimatePresence } from 'motion/react';
import { cloneElement, useCallback, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import useRootDom from '../RootDom/hooks/useRootDom';
import { PortalContext } from './context'

interface PortalProviderProps {
  children: ReactNode
}

export default function PortalProvider<T extends ValueType = ValueType>({ children }: PortalProviderProps) {
  const [dialogs, setDialogs] = useState<{ [k: string]: DialogObj }>({})
  const zIndex = useRef(0)
  const { getRootDom } = useRootDom()
  const rootEl = useMemo(() => getRootDom() ?? document.body, [getRootDom])
  const dialogContents = useRef(new Map())

  const openPortal = useCallback((id: string, content: DialogContent, rect?: DialogRect) => {
    dialogContents.current.set(id, content)
    return new Promise<T>((resolve, reject) => {
      setDialogs((prev) => ({
        ...prev,
        [id]: {
          zIndex: ++zIndex.current * 10,
          isOpen: true,
          rect,
          resolve,
          reject
        }
      }))
    })
  }, [])

  const closePortal = useCallback((id: string, value?: T) => {
    if (!dialogs[id]) return
    if (dialogs[id].resolve) dialogs[id].resolve(value)

    setDialogs((prev) => {
      const tempObj = { ...prev }
      if (tempObj[id]?.resolve) tempObj[id].resolve()
      delete tempObj[id]
      dialogContents.current.delete(id)
      return tempObj
    })
  }, [dialogs])

  return <PortalContext.Provider value={{
    openPortal,
    closePortal
  }}>
    {children}
    {createPortal(<div>
      <AnimatePresence>
        {Object.keys(dialogs).map(k => {
          return cloneElement(dialogContents.current.get(k), {
            closePortal: (value?: T) => closePortal(k, value),
            ...dialogs[k],
            key: k
          })
        })}
      </AnimatePresence>
    </div>, rootEl, 'portal-all')}
  </PortalContext.Provider>
}