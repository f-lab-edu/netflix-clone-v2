import { HookFormRadioGroup } from '../atoms/RadioGroup';
import { HookFormStarRate } from '../atoms/StarRate';

export default function ReviewStep2() {
  return <section aria-label='form step2'>
    <HookFormRadioGroup
      title='추천 여부'
      name='willRecommend'
      items={[
        { text: '추천', value: 'true' },
        { text: '비추천', value: 'false' }
      ]}
      formRule={{
        required: true
      }}
    />
    <fieldset css={{ color: 'white' }}>
      <legend>별점</legend>
      <HookFormStarRate name="rate" />
    </fieldset>
  </section >
}
