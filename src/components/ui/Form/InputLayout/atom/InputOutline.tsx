import type { ReactNode } from 'react';

interface InputOutlineProps {
  children?: ReactNode
}

export default function InputOutline({ children, ...props }: InputOutlineProps & CssProps) {
  return <div {...props}>{children}</div>
}
