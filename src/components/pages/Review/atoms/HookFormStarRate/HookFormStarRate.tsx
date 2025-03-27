import type { HookFormStarRateProps } from './types';
import { Controller, useFormContext } from 'react-hook-form';
import StarRate from './StarRate';

export default function HookFormStarRate({ name, ...starRateProps }: HookFormStarRateProps) {
  const { control } = useFormContext()
  return <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value } }) => <StarRate
      {...starRateProps}
      value={value}
      onChange={onChange}
    />}
  />

}
