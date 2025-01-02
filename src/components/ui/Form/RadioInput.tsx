import type { InputLayoutProps } from './InputLayout';
import type { ElementWithFilteredValue } from './hooks/useInputHelper';
import type { Interpolation } from '@emotion/react';
import InputLayout from './InputLayout'
import useInputHelper from './hooks/useInputHelper';
interface CssProps {
  css?: Interpolation
}
type InputType = string | undefined

interface RadioInputProps<I> extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children' | 'css'>
  selectedValue?: I
}
export default function RadioInput<I extends InputType = InputType>({
  css,
  inputLayoutProps,
  defaultValue,
  value,
  selectedValue,
  onBlur,
  onFocus,
  onChange,
  onChangeValue,
  ...props
}: RadioInputProps<I> & ElementWithFilteredValue<HTMLInputElement, I> & CssProps) {

  const { layoutProps, ...inputProps } = useInputHelper<I>({
    defaultValue,
    value: selectedValue,
    onBlur,
    onFocus,
    onChange,
    onChangeValue,
  })

  return <InputLayout {...inputLayoutProps} inputType='radio' {...layoutProps} >
    {(throwedCss) => <input
      type="radio"
      checked={selectedValue === value}
      value={value}
      {...props}
      {...inputProps}
      css={[css, throwedCss]}
    />}
  </InputLayout>
}