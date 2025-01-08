import type { InputLayoutContextValues } from './InputLayoutContext';
import type { ReactNode } from 'react';
import InputLayoutContext from './InputLayoutContext';
import InputError from './atom/InputError';
import InputLabel from './atom/InputLabel';
import InputOutline from './atom/InputOutline';
import InputPostfix from './atom/InputPostfix';
import InputPrefix from './atom/InputPrefix';
import InputShell from './atom/InputShell';
import InputTag from './atom/InputTag';

interface InputLayoutProps {
  children: ReactNode
}
const InputLayout = ({ children, className, ...props }: InputLayoutProps & CssProps & InputLayoutContextValues) => {

  return <InputLayoutContext.Provider value={props}>
    <div className={className}>
      {children}
    </div>
  </InputLayoutContext.Provider>
}

InputLayout.Error = InputError
InputLayout.Label = InputLabel
InputLayout.Outline = InputOutline
InputLayout.Postfix = InputPostfix
InputLayout.Prefix = InputPrefix
InputLayout.Shell = InputShell
InputLayout.Tag = InputTag

export default InputLayout