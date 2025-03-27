import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import useDateChange from '@/hooks/InputFilter/useDateChange';
import { HookFormRadioGroup } from '../atoms/RadioGroup';

export default function ReviewStep1() {
  const {
    register,
    watch,
    setValue,
    formState,
    trigger
  } = useFormContext<DramaReviewFormDataType>()

  const watchState = watch('watchState')
  const watchStartDate = watch('watchStartDate')

  useEffect(() => {
    trigger(['watchEndDate'])
  }, [watchStartDate, trigger])
  const dateFilter = useDateChange.WithoutLocale()
  return <section aria-label="form step1">
    <HookFormRadioGroup
      title='시청 상태'
      name='watchState'
      items={[
        { text: '미시청', value: 'none' },
        { text: '시청 중', value: 'watching' },
        { text: '다봤음', value: 'end' }
      ]}
      formRule={{
        required: true,
        onChange: (e) => {
          const changeValue = e.target.value
          if (changeValue !== 'end') {
            setValue('watchEndDate', '')
          }
        }
      }}
    />
    <TextInput.Dark
      type='date'
      label="시청 시작일"
      {...register('watchStartDate', {
        required: true,
        onChange: dateFilter,
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
        onChange: dateFilter,
      })}
      {...RHFValidErrorHelper(
        formState.errors.watchEndDate?.message,
        formState.touchedFields.watchEndDate
      )}
    />
  </section >
}
