import type { ReactNode } from 'react';
import { isValidElement } from 'react';

interface InputLabelProps {
  children?: ReactNode
  htmlFor?: string
}

export default function InputLabel({ children, ...props }: InputLabelProps & CssProps) {
  return <label {...props}>{children}</label>
}
export const InputLabelTypeCheck = (el: ReactNode) => {
  if (!isValidElement(el)) return false
  if (el.type === InputLabel({}).type) return true
  return false
}