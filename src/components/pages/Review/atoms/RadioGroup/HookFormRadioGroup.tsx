import type { HookFormRadioGroupProps } from './types';
import { useFormContext } from 'react-hook-form';
import RadioGroup from './RadioGroup';

export default function HookFormRadioGroup({
  name,
  formRule,
  ...props
}: HookFormRadioGroupProps) {
  const { register } = useFormContext()
  return <RadioGroup
    {...register(name, formRule)}
    {...props}
  />
}
