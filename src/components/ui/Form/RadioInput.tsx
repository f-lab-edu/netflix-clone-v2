import type { InputLayoutProps } from './InputLayout';
import type { InputHTMLAttributes } from 'react';
import { useId } from 'react';
import InputLayout from './InputLayout'

interface RadioInputProps extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children' | 'css'>
}
export default function RadioInput({
  css,
  inputLayoutProps,
  ...props
}: RadioInputProps & InputHTMLAttributes<HTMLInputElement> & CssProps) {

  const inputId = useId()

  return <InputLayout {...inputLayoutProps} inputType='radio' labelId={inputId} >
    {(throwedCss) => <input
      id={inputId}
      type="radio"
      {...props}
      css={[css, throwedCss]}
    />}
  </InputLayout>
}