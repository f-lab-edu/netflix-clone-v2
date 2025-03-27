import { useFormContext } from 'react-hook-form';
import LabelRadio from '@/components/ui/Form/LabelRadio';
import StarRate from './StarRate';

export default function ReviewStep2() {
  const {
    register,
    setValue,
    watch
  } = useFormContext()
  const willRecommend = watch('willRecommend')
  const rate = watch('rate')
  return <div>
    <div>
      추천 여부
      {willRecommend}
      <LabelRadio
        value='true'
        {...register('willRecommend', {
          required: true
        })}
      >
        추천
      </LabelRadio>
      <LabelRadio
        value='false'
        {...register('willRecommend', {
          required: true
        })}
      >
        비추천
      </LabelRadio>
    </div>
    <div css={{ color: 'white' }}>
      <StarRate
        value={rate}
        onChange={(v) => setValue('rate', v)}
      />
    </div>
  </div>
}
