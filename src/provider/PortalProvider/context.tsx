import type { ReactElement } from 'react';
import { createContext } from 'react';

export interface DialogRect {
  left: number
  top: number
  width: number
  height: number
  maxWidth?: number
  maxHeight?: number
}

export type ValueType = unknown

export type DialogContent = ReactElement<PortalDialogInterface>

export interface DialogObj {
  zIndex?: number
  isOpen?: boolean
  rect?: DialogRect
  resolve?: (_value?: any | PromiseLike<any>) => void;
  reject?: (_reason?: any) => void;
}

export interface PortalDialogInterface extends Omit<DialogObj, 'content' | 'resolve' | 'reject'> {
  closePortal?: (_value?: any) => void
}

interface PortalProviderContextValue {
  openPortal: (_id: string, _content: DialogContent, _rect?: DialogRect) => PromiseLike<any>
  closePortal: (_id: string, _value?: any) => void
}

export const PortalContext = createContext<PortalProviderContextValue>({
  openPortal: () => Promise.resolve(),
  closePortal: () => { }
})
