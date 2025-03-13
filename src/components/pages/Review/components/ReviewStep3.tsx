import type { UseFormReturn } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';

interface ReviewStepsProps extends Omit<UseFormReturn<DramaReviewFormData>, 'handleSubmit'> {
  onGoBackAction: () => void
}

export default function ReviewStep3({
  onGoBackAction,
  register
}: ReviewStepsProps) {
  return <div>
    <div>
      <TextInput.Dark
        label="후기"
        {...register('comment', {
          required: true,
        })}
      />
    </div>
    <button onClick={onGoBackAction}>Goto Before</button>
    <button type='submit'>
      Next
    </button>
  </div>
}