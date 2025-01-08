import type { ReactElement } from 'react';
import { cloneElement } from 'react';

interface InputTagProps {
  children?: ReactElement
}

export default function InputTag({ children, ...props }: InputTagProps & CssProps) {
  const input = cloneElement(children || <input />, props)
  return <>{input}</>
}