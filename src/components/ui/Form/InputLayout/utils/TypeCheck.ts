import type { FC, ReactElement, ReactNode } from 'react';
import { isValidElement } from 'react'

export type TypeCheckFuncType = (_el: ReactNode, _El: FC) => _el is ReactElement<object>

export const TypeCheck: TypeCheckFuncType = (el, El): el is ReactElement<object> => {
  if (!isValidElement(el)) return false
  return el.type === El
}