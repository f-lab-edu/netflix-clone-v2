import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';

export default function ReviewStep3() {
  const {
    register,
    unregister,
    formState,
  } = useFormContext<DramaReviewFormDataType>()
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
  </div>
}
