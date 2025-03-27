import type { StarRateProps } from './types';
import ConditionalRender from '@/components/utils/ConditionalRender'
import StarEmptyIcon from '@assets/netflix/icon/starEmptyIcon.svg'
import StarFillIcon from '@assets/netflix/icon/starFillIcon.svg'

export default function StarRate({
  value,
  maxValue = 5,
  minValue = 1,
  onChange,
}: StarRateProps) {
  return <div css={{ display: 'flex' }}>
    {Array(maxValue - (minValue - 1)).fill(0).map((v, i) => <ConditionalRender.Boolean
      key={`star-${i}`}
      condition={value >= i + minValue}
      render={{
        true: <StarFillIcon onClick={() => onChange(i + minValue)} />,
        false: <StarEmptyIcon onClick={() => onChange(i + minValue)} />
      }}
    />)}
  </div>
}
