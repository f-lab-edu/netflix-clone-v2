import type { ReactNode } from 'react';

interface InputLabelProps {
  children?: ReactNode
  htmlFor?: string
}

export default function InputLabel({ children, ...props }: InputLabelProps & CssProps) {
  return <label {...props}>{children}</label>
}
