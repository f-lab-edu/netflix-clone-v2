import type { InputHTMLAttributes } from 'react';
import type { RegisterOptions } from 'react-hook-form';

interface RadioOption {
  value: string
  text: string
}

export interface RadioGroupBaseProps {
  title: string,
  items: RadioOption[]
}

export type RadioGroupProps = RadioGroupBaseProps & InputHTMLAttributes<HTMLInputElement>

export interface HookFormRadioGroupProps extends RadioGroupBaseProps {
  name: string
  formRule?: RegisterOptions
}
