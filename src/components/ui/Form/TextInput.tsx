import type { InputLayoutProps } from './InputLayout';
import type { Interpolation } from '@emotion/react';
import type { InputHTMLAttributes } from 'react';
import { useId } from 'react';
import InputLayout from './InputLayout'
interface CssProps {
  css?: Interpolation
}

interface TextInputProps extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children' | 'css' | 'label'> & { label: string }
}
export default function TextInput({
  css,
  inputLayoutProps,
  ...props
}: TextInputProps & InputHTMLAttributes<HTMLInputElement> & CssProps) {
  const inputId = useId()

  return <InputLayout labelId={inputId} {...inputLayoutProps}>
    {(throwedCss) => <input {...props} id={inputId} placeholder={inputLayoutProps?.label || 'label'} css={[css, throwedCss]} />}
  </InputLayout>
}