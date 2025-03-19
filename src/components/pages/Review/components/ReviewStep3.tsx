import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';

interface ReviewStepsProps {
  onGoBackAction: () => void
}

export default function ReviewStep3({
  onGoBackAction,
}: ReviewStepsProps) {
  const {
    register,
    unregister,
    formState,
  } = useFormContext<DramaReviewFormData>()
  useEffect(() => {
    return () => {
      unregister('comment', {
        keepValue: true,
      })
    }
  }, [])
  return <div>
    <div>
      <TextInput.Dark
        label="후기"
        {...register('comment')}
        {...RHFValidErrorHelper(
          formState.errors.comment?.message,
          formState.touchedFields.comment
        )}
      />
    </div>
    <button onClick={onGoBackAction}>Goto Before</button>
    <button type='submit'>
      Next
    </button>
  </div>
}
