import type { InputLayoutValues } from '../InputLayout';
import type { InputHTMLAttributes } from 'react';
import InputLayout from '../InputLayout';

type TextInputProps = InputLayoutValues & CssProps

export default function LightTextInput(props: InputHTMLAttributes<HTMLInputElement> & TextInputProps) {
  return <InputLayout>
    <InputLayout.Shell>
      <InputLayout.Tag {...props} />
    </InputLayout.Shell>
  </InputLayout>
}