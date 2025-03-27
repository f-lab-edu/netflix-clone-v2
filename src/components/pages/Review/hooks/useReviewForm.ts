import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import type { UseFormProps } from 'react-hook-form';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import DramaReview from '@/lib/network/types/DramaReview';

const formDataKey = 'write-review-state'

interface useReviewFormProps {
  contentUploadDate: number,
  steps: number,
  contentId: number,
  onInit?: () => void,
  storage?: Storage,
  props?: UseFormProps<DramaReviewFormDataType>,
}

export default function useReviewForm({
  contentUploadDate,
  steps,
  contentId,
  onInit,
  storage = localStorage,
  props,
}: useReviewFormProps) {

  const loadSavedData = (): DramaReviewFormDataType => {
    const state = storage.getItem(formDataKey)
    return state ? JSON.parse(state) as DramaReviewFormDataType : {
      contentId,
      watchState: 'none',
      rate: 3,
      comment: '',
      watchEndDate: '',
      watchStartDate: '',
      isPublic: 'false',
      willRecommend: 'false'
    }
  }

  const { watch, getValues, setValue, ...formData } = useForm<DramaReviewFormDataType>({
    ...props,
    mode: 'onBlur',
    defaultValues: loadSavedData(),
    resolver: DramaReview.hookFormResolver(steps, String(contentUploadDate))
  })
  const values = watch()
  useEffect(() => {
    storage.setItem(formDataKey, JSON.stringify(values))
  }, [values, storage])

  const initReviewStates = useCallback(() => {
    setValue('contentId', contentId)
    setValue('comment', '')
    setValue('isPublic', 'false')
    setValue('rate', 3)
    setValue('watchEndDate', '')
    setValue('watchStartDate', '')
    setValue('watchState', 'watching')
    setValue('willRecommend', 'false')
    if (onInit) {
      onInit()
    }
  }, [onInit, setValue, contentId])

  useEffect(() => {
    const contentIdOnForm = getValues('contentId')
    if (contentIdOnForm !== contentId) {
      initReviewStates()
    }
  }, [getValues, initReviewStates, contentId])

  return {
    watch, setValue, getValues, initReviewStates, ...formData
  }
}
