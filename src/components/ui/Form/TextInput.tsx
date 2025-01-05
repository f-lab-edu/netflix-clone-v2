import type { InputLayoutProps } from './InputLayout';
import type { Interpolation } from '@emotion/react';
import type { InputHTMLAttributes } from 'react';
import { useId } from 'react';
import InputLayout from './InputLayout'
import useIsFocus from './hooks/useIsFocus';
interface CssProps {
  css?: Interpolation
}

interface TextInputProps extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children' | 'css'>
}
export default function TextInput({
  css,
  inputLayoutProps,
  onFocus,
  onBlur,
  ...props
}: TextInputProps & InputHTMLAttributes<HTMLInputElement> & CssProps) {
  const inputId = useId()
  const { isFocus, ...focusEvent } = useIsFocus(onFocus, onBlur)

  return <InputLayout labelId={inputId} isFocus={isFocus} {...inputLayoutProps}>
    {(throwedCss) => <input {...props} id={inputId} placeholder={inputLayoutProps?.label || 'label'} css={[css, throwedCss]} {...focusEvent} />}
  </InputLayout>
}