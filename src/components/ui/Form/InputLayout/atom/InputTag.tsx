import type { InputHTMLAttributes, ReactNode } from 'react';
import { cloneElement, isValidElement, useMemo } from 'react';

type InputTagProps = {
  children?: ReactNode
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'children'>

export default function InputTag({ children, ...props }: InputTagProps & CssProps) {
  const render = useMemo(() => {
    if (typeof children === 'undefined' || isValidElement(children))
      return cloneElement(children || <input />, props)
    else return children || <input />
  }, [children, props])
  return <>{render}</>
}