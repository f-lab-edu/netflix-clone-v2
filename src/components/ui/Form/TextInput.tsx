import type { InputLayoutProps } from './InputLayout';
import type { Interpolation } from '@emotion/react';
import type { InputHTMLAttributes } from 'react';
import { useId, useMemo } from 'react';
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
  const hasValue = useMemo(() => Boolean(props.value), [props.value])

  return <InputLayout labelId={inputId} isFocus={isFocus} hasValue={hasValue} {...inputLayoutProps}>
    {(throwedCss) => <input {...props} id={inputId} css={[css, throwedCss]} {...focusEvent} />}
  </InputLayout>
}