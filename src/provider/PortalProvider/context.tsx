import type { ReactElement } from 'react';
import { createContext } from 'react';

export type ValueType = unknown

export type DialogContent = ReactElement<PortalDialogInterface>

export interface DialogObj {
  zIndex: number
  isOpen: boolean
  resolve?: (_value?: any | PromiseLike<any>) => void;
  reject?: (_reason?: any) => void;
}

export interface PortalDialogInterface extends Omit<DialogObj, 'content' | 'resolve' | 'reject'> {
  closePortal?: (_value?: any) => void
}

interface PortalProviderContextValue {
  registPortal: (_content: DialogContent) => string
  openPortal: (_id: string) => PromiseLike<any>
  closePortal: (_id: string, _value?: any) => void
  deletePortal: (_id: string) => void
}

export const PortalContext = createContext<PortalProviderContextValue>({
  registPortal: () => '',
  closePortal: () => { },
  openPortal: () => Promise.resolve(),
  deletePortal: () => { }
})
