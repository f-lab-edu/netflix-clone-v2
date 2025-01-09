import type { HTMLAttributes, ReactNode } from 'react';
import InputBaseDiv from './atom/InputBaseDiv';
import InputLabel from './atom/InputLabel';
import InputTag from './atom/InputTag';

export interface InputLayoutValues {
  isValid?: boolean,
  error?: string,
}

type InputLayoutProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>
const InputLayout = ({ children, className, ...props }: InputLayoutProps & CssProps) => {

  return <div className={className} {...props}>
    {children}
  </div>
}

InputLayout.Label = InputLabel
InputLayout.Tag = InputTag
InputLayout.Error = InputBaseDiv
InputLayout.Outline = InputBaseDiv
InputLayout.Postfix = InputBaseDiv
InputLayout.Prefix = InputBaseDiv
InputLayout.Shell = InputBaseDiv

export default InputLayout