import type { DialogContent, DialogObj, DialogRect, ValueType } from './context';
import type { ReactNode } from 'react';
import { AnimatePresence } from 'motion/react';
import { cloneElement, useCallback, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import useRootDom from '../../../../../provider/RootDom/hooks/useRootDom';
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

  const openPortal = useCallback((id: string, content: DialogContent, rect?: DialogRect, endRect?: DialogRect) => {
    dialogContents.current.set(id, content)
    return new Promise<T>((resolve, reject) => {
      setDialogs((prev) => ({
        ...prev,
        [id]: {
          promise: {
            resolve,
            reject
          },
          props: {
            css: { zIndex: ++zIndex.current * 10 },
            isOpen: true,
            rect,
            endRect: endRect ?? rect
          }
        }
      }))
    })
  }, [])

  const closePortal = useCallback((id: string, value?: T) => {
    if (!dialogs[id]) return

    setDialogs((prev) => {
      const { [id]: old, ...others } = prev
      if (old?.promise.resolve) old.promise.resolve(value)
      dialogContents.current.delete(id)
      if (!Object.keys(others).length) zIndex.current = 0
      return others
    })
  }, [dialogs])

  const value = useMemo(() => ({
    openPortal,
    closePortal
  }), [openPortal, closePortal])

  return <PortalContext.Provider value={value}>
    {children}
    {createPortal(<div>
      <AnimatePresence>
        {Object.keys(dialogs).map(k => {
          return cloneElement(dialogContents.current.get(k), {
            closePortal: (value?: T) => closePortal(k, value),
            ...dialogs[k].props,
            key: k
          })
        })}
      </AnimatePresence>
    </div>, rootEl, 'portal-all')}
  </PortalContext.Provider>
}