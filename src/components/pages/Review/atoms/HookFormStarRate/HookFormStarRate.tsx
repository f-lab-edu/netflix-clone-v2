import type { HookFormStarRateProps } from './types';
import { Controller, useFormContext } from 'react-hook-form';
import ConditionalRender from '@/components/utils/ConditionalRender'
import StarEmptyIcon from '@assets/netflix/icon/starEmptyIcon.svg'
import StarFillIcon from '@assets/netflix/icon/starFillIcon.svg'

export default function HookFormStarRate({ minValue = 1, maxValue = 5, name }: HookFormStarRateProps) {
  const { control } = useFormContext()
  return <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value } }) => <div css={{ display: 'flex' }}>
      {Array(maxValue - (minValue - 1)).fill(0).map((v, i) => <ConditionalRender.Boolean
        key={`star-${i}`}
        condition={value >= i + minValue}
        render={{
          true: <StarFillIcon onClick={() => onChange(i + minValue)} />,
          false: <StarEmptyIcon onClick={() => onChange(i + minValue)} />
        }}
      />)}
    </div>}
  />

}
