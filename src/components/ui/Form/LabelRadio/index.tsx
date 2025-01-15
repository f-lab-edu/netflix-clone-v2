import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';
import InputLayout from '../InputLayout';
import { inputStyle } from './style';

type LabelRadioProps = {
  children?: ReactNode
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'>

export default function LabelRadio({ children, className, ...props }: LabelRadioProps) {
  const inputId = useId()
  return <InputLayout className={className}>
    <InputLayout.Shell css={{ display: 'grid' }}>
      <InputLayout.Tag id={inputId} type="radio" {...props} css={inputStyle} />
      <InputLayout.Label htmlFor={inputId}>
        {children}
      </InputLayout.Label>
    </InputLayout.Shell>
  </InputLayout>
}