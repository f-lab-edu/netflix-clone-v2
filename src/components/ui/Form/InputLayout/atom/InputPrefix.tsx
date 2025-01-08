import type { ReactNode } from 'react';
import { isValidElement } from 'react';

interface InputPrefixProps {
  children?: ReactNode
}

export default function InputPrefix({ children, ...props }: InputPrefixProps & CssProps) {
  return <div {...props}>{children}</div>
}
export const TypeCheck = (el: ReactNode) => {
  if (!isValidElement(el)) return false
  if (el.type === InputPrefix({}).type) return true
  return false
}