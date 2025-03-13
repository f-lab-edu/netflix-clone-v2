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

export type ValueType = any

export type DialogContent = ReactElement<PortalDialogInterface>

export interface DialogPromiseObj {
  resolve?: (_value?: any) => void;
  reject?: (_reason?: any) => void;
}

export interface DialogPropsObj extends CssProps {
  rect?: DialogRect
  endRect?: DialogRect
}
export interface DialogObj {
  promise: DialogPromiseObj
  props: DialogPropsObj
}

export interface PortalDialogInterface extends DialogPropsObj {
  closePortal?: (_value?: any) => void
}

interface PortalProviderContextValue {
  openPortal: (_id: string, _content: DialogContent) => PromiseLike<any>
  closePortal: (_id: string, _value?: any) => void
}

export const PortalContext = createContext<PortalProviderContextValue>({
  openPortal: () => Promise.resolve(),
  closePortal: () => { }
})
