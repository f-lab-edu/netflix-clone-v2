import { useFormContext } from 'react-hook-form';
import LabelRadio from '@/components/ui/Form/LabelRadio';

export default function ReviewStep4() {
  const {
    register
  } = useFormContext()
  return <section aria-label="form step4">
    <fieldset>
      <legend>공개 여부</legend>
      <ul role="group">
        <li>
          <LabelRadio
            value='true'
            {...register('isPublic', {
              required: true
            })}
          >
            공개
          </LabelRadio>
        </li>
        <li>
          <LabelRadio
            value='false'
            {...register('isPublic', {
              required: true
            })}
          >
            비공개
          </LabelRadio>
        </li>
      </ul>
    </fieldset>
  </section>
}
