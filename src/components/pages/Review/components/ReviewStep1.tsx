import { useCallback, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import LabelRadio from '@/components/ui/Form/LabelRadio';
import TextInput from '@/components/ui/Form/TextInput';
import RHFValidErrorHelper from '@/components/ui/Form/utils/RHFValidErrorHelper';
import useDateChange from '@/hooks/InputFilter/useDateChange';

interface ReviewStepsProps {
  onGoBackAction: () => void
  contentUploadDate?: number
}

export default function ReviewStep1({
  contentUploadDate = 0,
}: ReviewStepsProps) {
  const {
    register,
    watch,
    setValue,
    formState,
    trigger
  } = useFormContext<DramaReviewFormData>()

  const watchState = watch('watchState')
  const watchStartDate = watch('watchStartDate')
  const dateChecker = useCallback((a: string | number, b: string | number) => {
    const beforeDate = new Date(a)
    const nextDate = new Date(b)
    return beforeDate.getTime() > nextDate.getTime()
  }, [])
  const startDateValidator = (value: string) => {
    if (dateChecker(String(contentUploadDate), value)) return '시청 시작일은 개봉일보다 빠를 수 없습니다.'
    return true
  }

  const endDateValidator = (value: string) => {
    if (dateChecker(watchStartDate, value)) return '시청 종료일은 시청 시작일보다 빠를 수 없습니다.'
    return true
  }
  useEffect(() => {
    trigger(['watchEndDate'])
  }, [watchStartDate, trigger])
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
          {...register('watchState', {
            required: true,
            onChange: (e) => {
              const changeValue = e.target.value
              if (changeValue !== 'end') {
                setValue('watchEndDate', '')
              }
            }
          })}
        >
          미시청
        </LabelRadio>
        <LabelRadio
          value='watching'
          {...register('watchState')}
        >
          시청 중
        </LabelRadio>
        <LabelRadio
          value='end'
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
        onChange: dateFilter,
        validate: {
          startDateValidator
        }
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
        validate: {
          endDateValidator
        }
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