import { useFormContext } from 'react-hook-form';
import LabelRadio from '@/components/ui/Form/LabelRadio';
import HookFormStarRate from '../atoms/HookFormStarRate';

export default function ReviewStep2() {
  const {
    register,
  } = useFormContext()
  return <section aria-label='form step2'>
    <fieldset>
      <legend>추천 여부</legend>
      <ul role="group">
        <li>
          <LabelRadio
            value='true'
            {...register('willRecommend', {
              required: true
            })}
          >
            추천
          </LabelRadio>
        </li>
        <li>
          <LabelRadio
            value='false'
            {...register('willRecommend', {
              required: true
            })}
          >
            비추천
          </LabelRadio>
        </li>
      </ul>
    </fieldset>
    <fieldset css={{ color: 'white' }}>
      <legend>별점</legend>
      <HookFormStarRate name="rate" />
    </fieldset>
  </section>
}
