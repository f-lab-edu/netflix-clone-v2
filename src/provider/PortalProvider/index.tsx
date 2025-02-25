import type { DialogContent, DialogObj, ValueType } from './context';
import type { ReactNode } from 'react';
import { cloneElement, useCallback, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import { v4 as uuid } from 'uuid'
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

  const registPortal = useCallback((content: DialogContent) => {
    const id = uuid()
    dialogContents.current.set(id, content)
    setDialogs((prev) => ({
      ...prev,
      [id]: {
        zIndex: ++zIndex.current * 10,
        isOpen: false,
      }
    }))
    return id
  }, [])
  const openPortal = useCallback((id: string) => {
    if (!dialogs[id]) throw new Error('Wrong Dialog tried open')
    return new Promise<T>((resolve, reject) => {
      setDialogs((prev) => ({
        ...prev,
        [id]: {
          ...dialogs[id],
          isOpen: true,
          resolve,
          reject
        }
      }))
    })
  }, [dialogs])

  const closePortal = useCallback((id: string, value?: T) => {
    if (!dialogs[id]) return
    if (dialogs[id].resolve) dialogs[id].resolve(value)
    setDialogs((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        reject: undefined,
        resolve: undefined
      }
    }))
  }, [dialogs])

  const deletePortal = useCallback((id: string) => {
    setDialogs((prev) => {
      const tempObj = { ...prev }
      if (tempObj[id]?.resolve) tempObj[id].resolve()
      delete tempObj[id]
      dialogContents.current.delete(id)
      return tempObj
    })
  }, [])

  return <PortalContext.Provider value={{
    registPortal,
    openPortal,
    closePortal,
    deletePortal
  }}>
    {children}
    {createPortal(<div>
      {Object.keys(dialogs).map(k => {
        return cloneElement(dialogContents.current.get(k), {
          closePortal: (value?: T) => closePortal(k, value),
          ...dialogs[k],
          key: k
        })
      })}
    </div>, rootEl, 'portal-all')}
  </PortalContext.Provider>
}