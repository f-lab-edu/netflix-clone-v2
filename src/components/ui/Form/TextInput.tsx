import type { InputLayoutProps } from './InputLayout';
import type { Interpolation } from '@emotion/react';
import InputLayout from './InputLayout'
import useInputHelper from './hooks/useInputHelper';
interface CssProps {
  css?: Interpolation
}
type InputType = string | undefined
type OmitedSelectValue = Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'defaultValue' | 'value'> & {
  defaultValue?: InputType
  value?: InputType
}
interface TextInputProps extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children' | 'css'>
  onChangeValue?: (_value: InputType) => void
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
}: TextInputProps & OmitedSelectValue & CssProps) {

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