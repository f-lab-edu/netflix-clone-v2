import type { ReactNode } from 'react';

type InputBaseDivProps = {
  children?: ReactNode
} & CssProps

const InputBaseDiv = ({ children, ...props }: InputBaseDivProps) => {
  return <div {...props}>{children}</div>
}
export default InputBaseDiv