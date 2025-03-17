import type { UseFormReturn } from 'react-hook-form';
import { useEffect } from 'react';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';

interface ReviewStepsProps extends Omit<UseFormReturn<DramaReviewFormData>, 'handleSubmit'> {
  onGoBackAction: () => void
}

export default function ReviewStep3({
  onGoBackAction,
  register,
  unregister,
  getValues,
  formState,
}: ReviewStepsProps) {
  const rate = getValues('rate')
  const commentOptions = rate === 1 || rate === 5 ? {
    maxLength: {
      value: 300,
      message: '후기는 최소 100자에서 300자를 작성 하셔야 합니다.'
    },
    minLength: {
      value: 100,
      message: '후기는 최소 100자에서 300자를 작성 하셔야 합니다.'
    }
  } : undefined
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
        {...register('comment', {
          required: Boolean(commentOptions),
          ...commentOptions
        })}
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