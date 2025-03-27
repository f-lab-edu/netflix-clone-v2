import { useFormContext } from 'react-hook-form';
import LabelRadio from '@/components/ui/Form/LabelRadio';

export default function ReviewStep4() {
  const {
    register
  } = useFormContext()
  return <div>
    <div>
      공개 여부
      <LabelRadio
        value='true'
        {...register('isPublic', {
          required: true
        })}
      >
        공개
      </LabelRadio>
      <LabelRadio
        value='false'
        {...register('isPublic', {
          required: true
        })}
      >
        비공개
      </LabelRadio>
    </div>
  </div>
}
