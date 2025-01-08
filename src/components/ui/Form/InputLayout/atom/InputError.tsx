import type { ReactNode } from 'react';

interface InputErrorProps {
  children?: ReactNode
}

export default function InputError({ children, ...props }: InputErrorProps & CssProps) {
  return <div {...props}>{children}</div>
}