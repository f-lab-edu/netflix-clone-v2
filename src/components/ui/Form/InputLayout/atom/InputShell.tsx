import type { ReactNode } from 'react';
import { isValidElement } from 'react';

interface InputShellProps {
  children?: ReactNode
}

export default function InputShell({ children, ...props }: InputShellProps & CssProps) {
  return <div {...props}>{children}</div>
}
export const TypeCheck = (el: ReactNode) => {
  if (!isValidElement(el)) return false
  if (el.type === InputShell({}).type) return true
  return false
}