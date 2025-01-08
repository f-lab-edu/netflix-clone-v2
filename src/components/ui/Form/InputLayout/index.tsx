import type { InputLayoutContextValues } from './InputLayoutContext';
import type { ReactNode } from 'react';
import { cloneElement } from 'react';
import InputLayoutContext from './InputLayoutContext';
import InputError from './atom/InputError';
import InputLabel from './atom/InputLabel';
import InputOutline from './atom/InputOutline';
import InputPostfix from './atom/InputPostfix';
import InputPrefix from './atom/InputPrefix';
import InputShell from './atom/InputShell';
import InputTag from './atom/InputTag';
import { getFilteredElement } from './utils/getFilteredElement';

interface InputLayoutProps {
  children: ReactNode
}
const InputLayout = ({ children, className, ...props }: InputLayoutProps & CssProps & InputLayoutContextValues) => {
  const errorElements = getFilteredElement(children, InputError)
  const labelElements = getFilteredElement(children, InputLabel)
  const outlineElement = getFilteredElement(children, InputOutline)
  const postfixElement = getFilteredElement(children, InputPostfix)
  const prefixElement = getFilteredElement(children, InputPrefix)
  const shellElement = getFilteredElement(children, InputShell)
  const inputElement = getFilteredElement(children, InputTag)

  const displayShellElement = cloneElement(
    shellElement[0] || <div />,
    [prefixElement, inputElement, postfixElement, labelElements, outlineElement].flat().filter(Boolean)
  )
  console.log(shellElement)
  return <InputLayoutContext.Provider value={props}>
    <div className={className}>
      {displayShellElement}
      {errorElements}
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