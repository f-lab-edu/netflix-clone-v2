import type { UseReviewFormProps } from './types';
import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form'
import DramaReview from '@/lib/network/types/DramaReview';

const formDataKey = 'write-review-state'

export default function useReviewForm({
  contentUploadDate,
  steps,
  contentId,
  onInit,
  storage = localStorage,
  props,
}: UseReviewFormProps) {
  const storedValueString = storage.getItem(formDataKey)
  const storedValue: DramaReviewFormDataType | undefined = storedValueString
    ? JSON.parse(storedValueString)
    : undefined
  const formDefaultValue: DramaReviewFormDataType = useMemo(() => ({
    contentId: Number(contentId),
    watchState: 'none',
    rate: 3,
    comment: '',
    watchEndDate: '',
    watchStartDate: '',
    isPublic: 'false',
    willRecommend: 'false'
  }), [contentId])

  const form = useForm<DramaReviewFormDataType>({
    ...props,
    mode: 'onBlur',
    defaultValues: formDefaultValue,
    values: storedValue,
    resolver: DramaReview.hookFormResolver(steps, String(contentUploadDate))
  })
  const { reset, getValues } = form

  const saveFormData = () => {
    storage.setItem(formDataKey, JSON.stringify(form.getValues()))
  }

  const initReviewStates = useCallback(() => {
    reset(formDefaultValue)
    if (onInit) {
      onInit()
    }
  }, [onInit, reset, formDefaultValue])

  useEffect(() => {
    const contentIdOnForm = getValues('contentId')
    if (contentIdOnForm !== contentId) {
      initReviewStates()
    }
  }, [getValues, initReviewStates, contentId])

  return {
    initReviewStates,
    saveFormData,
    ...form
  }
}
