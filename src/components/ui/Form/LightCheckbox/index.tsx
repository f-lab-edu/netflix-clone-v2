import type { InputLayoutValues } from '../InputLayout';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';
import InputLayout from '../InputLayout';

type CheckInputProps = InputLayoutValues & CssProps & {
  label: ReactNode
}
export default function CheckInput({
  label,
  ...inputProps
}: CheckInputProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  const inputId = useId()
  return <InputLayout>
    <InputLayout.Shell>
      <InputLayout.Tag id={inputId} type="checkbox" {...inputProps} />
      <InputLayout.Label htmlFor={inputId}>{label}</InputLayout.Label>
    </InputLayout.Shell>
  </InputLayout>
}