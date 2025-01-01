import type { InputLayoutProps } from './InputLayout';
import type { ElementWithFilteredValue } from './hooks/useInputHelper';
import type { Interpolation } from '@emotion/react';
import InputLayout from './InputLayout'
import useInputHelper from './hooks/useInputHelper';
interface CssProps {
  css?: Interpolation
}
type InputType = string | undefined

interface TextInputProps extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children' | 'css'>
}
export default function TextInput({
  css,
  inputLayoutProps,
  defaultValue,
  value,
  onBlur,
  onFocus,
  onChange,
  onChangeValue,
  ...props
}: TextInputProps & ElementWithFilteredValue<HTMLInputElement, InputType> & CssProps) {

  const { layoutProps, ...inputProps } = useInputHelper<InputType>({
    defaultValue,
    value,
    onBlur,
    onFocus,
    onChange,
    onChangeValue,
  })

  return <InputLayout {...inputLayoutProps} {...layoutProps}>
    {(throwedCss) => <input {...props} {...inputProps} css={[css, throwedCss]} />}
  </InputLayout>
}