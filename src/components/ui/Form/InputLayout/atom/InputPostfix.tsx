import type { ReactNode } from 'react';
import { isValidElement } from 'react';

interface InputPostfixProps {
  children?: ReactNode
}

export default function InputPostfix({ children, ...props }: InputPostfixProps & CssProps) {
  return <div {...props}>{children}</div>
}
export const TypeCheck = (el: ReactNode) => {
  if (!isValidElement(el)) return false
  if (el.type === InputPostfix({}).type) return true
  return false
}