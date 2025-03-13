import type { UseFormReturn } from 'react-hook-form';
import LabelRadio from '@/components/ui/Form/LabelRadio';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import useDateChange from '@/hooks/InputFilter/useDateChange';

interface ReviewStepsProps extends Omit<UseFormReturn<DramaReviewFormData>, 'handleSubmit'> {
  onGoBackAction: () => void
}

export default function ReviewStep1({
  register,
  watch,
  formState
}: ReviewStepsProps) {
  const watchState = watch('watchState')
  const dateFilter = useDateChange.WithoutLocale()
  return <div>
    <div>
      시청 상태
      <div css={{
        display: 'flex',
        columnGap: '8px'
      }}>
        <LabelRadio
          value='none'
          checked={watchState === 'none'}
          {...register('watchState', {
            required: true
          })}
        >
          미시청
        </LabelRadio>
        <LabelRadio
          value='watching'
          checked={watchState === 'watching'}
          {...register('watchState')}
        >
          시청 중
        </LabelRadio>
        <LabelRadio
          value='end'
          checked={watchState === 'end'}
          {...register('watchState')}
        >
          다봤음
        </LabelRadio>
      </div>
    </div>
    <TextInput.Dark
      type='date'
      label="시청 시작일"
      {...register('watchStartDate', {
        required: true,
        onChange: dateFilter
      })}
      {...RHFValidErrorHelper(
        formState.errors.watchStartDate?.message,
        formState.touchedFields.watchStartDate
      )}
    />
    <TextInput.Dark
      type='date'
      label="시청 종료일"
      {...register('watchEndDate', {
        required: watchState === 'end',
        disabled: watchState !== 'end',
        onChange: dateFilter
      })}
      {...RHFValidErrorHelper(
        formState.errors.watchEndDate?.message,
        formState.touchedFields.watchEndDate
      )}
    />
    <button type='submit'>
      Next
    </button>
  </div >
}