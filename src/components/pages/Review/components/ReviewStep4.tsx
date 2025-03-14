import type { UseFormReturn } from 'react-hook-form';
import LabelRadio from '@/components/ui/Form/LabelRadio';

interface ReviewStepsProps extends Omit<UseFormReturn<DramaReviewFormData>, 'handleSubmit'> {
  onGoBackAction: () => void
}

export default function ReviewStep4({
  onGoBackAction,
  register,
  watch
}: ReviewStepsProps) {
  const isPublic = watch('isPublic')
  console.log(isPublic)
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

    <button onClick={onGoBackAction}>Goto Before</button>
    <button type='submit'>
      Save
    </button>
  </div>
}