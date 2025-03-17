import type { UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import z from 'zod'
import useReviewSteps from './useReviewSteps';

const dateChecker = (a: string | number, b: string | number) => {
  return new Date(a) < new Date(b)
}

const formDataKey = 'write-review-state'

export default function useReviewForm(
  contentUploadDate: number,
  storage: Storage = localStorage,
  props?: UseFormProps<DramaReviewFormData>,
) {
  const { contentId: contentIdStr } = useParams<{ contentId: string }>()

  const { setSteps, steps } = useReviewSteps()

  const loadSavedData = (): DramaReviewFormData => {
    const state = storage.getItem(formDataKey)
    return state ? JSON.parse(state) as DramaReviewFormData : {
      contentId: contentIdStr,
      watchState: 'none',
      rate: 3,
      comment: '',
      watchEndDate: '',
      watchStartDate: '',
      isPublic: 'false',
      willRecommend: 'false'
    }
  }

  const { watch, getValues, setValue, ...formData } = useForm<DramaReviewFormData>({
    ...props,
    mode: 'onBlur',
    defaultValues: loadSavedData(),
    resolver: zodResolver(
      z.object({
        contentId: z.string().regex(/^\d+$/),
        watchState: z.enum(['none', 'watching', 'end']),
        watchStartDate: z.string().date(),
        watchEndDate: z.string().or(z.string().date()),
        willRecommend: z.enum(['true', 'false']),
        rate: z.number(),
        comment: z.string(),
        isPublic: z.enum(['true', 'false']),
      })
        .refine((data) => dateChecker(String(contentUploadDate), data.watchStartDate), {
          message: '시청 시작일은 개봉일보다 빠를 수 없습니다.',
          path: ['watchStartDate']
        })
        .refine((data) => data.watchState === 'end' ? data.watchEndDate : true, {
          message: '다봤음 상태에서 시청 종료일을 선택해야 합니다.',
          path: ['watchEndDate']
        })
        .refine((data) => data.watchState === 'end' ? dateChecker(data.watchStartDate, data.watchEndDate) : true, {
          message: '시청 종료일은 시청 시작일보다 빠를 수 없습니다.',
          path: ['watchEndDate']
        })
        .refine((data) =>
          steps >= 3 && (data.rate === 1 || data.rate === 5) ?
            data.comment.length >= 100 && data.comment.length <= 300 :
            true, {
          message: '별점이 1점 또는 5점이면 후기는 최소 100자에서 300자를 작성 해야합니다.',
          path: ['comment'],
        })
    ),
  })
  const values = watch()
  useEffect(() => {
    storage.setItem(formDataKey, JSON.stringify(values))
  }, [values, storage])

  const initReviewStates = useCallback((contentId: string) => {
    setValue('contentId', contentId)
    setValue('comment', '')
    setValue('isPublic', 'false')
    setValue('rate', 3)
    setValue('watchEndDate', '')
    setValue('watchStartDate', '')
    setValue('watchState', 'watching')
    setValue('willRecommend', 'false')
    setSteps(1)
  }, [setSteps, setValue])

  useEffect(() => {
    const contentId = getValues('contentId')
    if (!contentIdStr) return
    if (contentIdStr !== contentId) {
      initReviewStates(contentIdStr)
    }
    return () => {
      initReviewStates(contentIdStr)
    }
  }, [contentIdStr, getValues, initReviewStates])

  return {
    watch, setValue, getValues, initReviewStates, ...formData
  }
}
