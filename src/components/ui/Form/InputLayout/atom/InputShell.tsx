import type { ReactNode } from 'react';

interface InputShellProps {
  children?: ReactNode
}

export default function InputShell({ children, ...props }: InputShellProps & CssProps) {
  return <div {...props}>{children}</div>
}