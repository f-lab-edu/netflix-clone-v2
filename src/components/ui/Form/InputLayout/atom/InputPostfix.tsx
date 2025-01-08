import type { ReactNode } from 'react';

interface InputPostfixProps {
  children?: ReactNode
}

export default function InputPostfix({ children, ...props }: InputPostfixProps & CssProps) {
  return <div {...props}>{children}</div>
}