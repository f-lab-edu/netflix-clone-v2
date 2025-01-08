import type { ReactNode } from 'react';

interface InputPrefixProps {
  children?: ReactNode
}

export default function InputPrefix({ children, ...props }: InputPrefixProps & CssProps) {
  return <div {...props}>{children}</div>
}