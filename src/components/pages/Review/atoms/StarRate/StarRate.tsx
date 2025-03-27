import type { StarRateProps } from './types';
import ConditionalRender from '@/components/utils/ConditionalRender'
import StarEmptyIcon from '@assets/netflix/icon/starEmptyIcon.svg'
import StarFillIcon from '@assets/netflix/icon/starFillIcon.svg'

export default function StarRate({ value, onChange }: StarRateProps) {
  return <div css={{
    display: 'flex'
  }}>
    {Array(5).fill(0).map((v, i) => <ConditionalRender.Boolean
      key={`star-${i}`}
      condition={value >= i + 1}
      render={{
        true: <StarFillIcon onClick={() => onChange(i + 1)} />,
        false: <StarEmptyIcon onClick={() => onChange(i + 1)} />
      }}
    />)}
  </div>
}
