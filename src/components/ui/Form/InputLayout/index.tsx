import type { HTMLAttributes, ReactNode } from 'react';
import InputError from './atom/InputError';
import InputLabel from './atom/InputLabel';
import InputOutline from './atom/InputOutline';
import InputPostfix from './atom/InputPostfix';
import InputPrefix from './atom/InputPrefix';
import InputShell from './atom/InputShell';
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

InputLayout.Error = InputError
InputLayout.Label = InputLabel
InputLayout.Outline = InputOutline
InputLayout.Postfix = InputPostfix
InputLayout.Prefix = InputPrefix
InputLayout.Shell = InputShell
InputLayout.Tag = InputTag

export default InputLayout