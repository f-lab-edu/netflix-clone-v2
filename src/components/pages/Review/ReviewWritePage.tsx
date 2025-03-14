import type { NextPageWithLayout } from '@/pages/_app';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import BrowserLayout from '@/components/layout/BrowserLayout';
import ClientOnly from '@/components/utils/ClientOnly';
import ConditionalRender from '@/components/utils/ConditionalRender';
import useGetContentById from '@/hooks/Query/content/useGetContentById';
import ReviewStep1 from './components/ReviewStep1';
import ReviewStep2 from './components/ReviewStep2';
import ReviewStep3 from './components/ReviewStep3';
import ReviewStep4 from './components/ReviewStep4';
import useReviewState, { defaultReviewState } from './hooks/useReviewState';
import useReviewSteps from './hooks/useReviewSteps';

const ReviewWritePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { contentId: contentIdStr } = useParams<{ contentId: string }>()
  const contentId = useMemo(() => Number(contentIdStr), [contentIdStr])
  const { data: content } = useGetContentById(contentId)
  const { steps, setSteps, gotoNext, gotoPrev } = useReviewSteps()
  const [reviewData, setReviewData] = useReviewState()
  const { handleSubmit, ...formProps } = useForm<DramaReviewFormData>({
    mode: 'onBlur',
    defaultValues: reviewData,
    values: reviewData
  })

  const initReviewStates = useCallback(() => {
    setReviewData({ ...defaultReviewState, contentId: Number(contentIdStr) })
    setSteps(1)
  }, [contentIdStr, setReviewData, setSteps])

  useEffect(() => {
    if (!(reviewData && contentIdStr)) return
    if (contentIdStr !== String(reviewData.contentId)) {
      initReviewStates()
    }
  }, [contentIdStr, reviewData, initReviewStates])

  const onSubmitAction = (data: DramaReviewFormData) => {
    setReviewData({
      ...data,
      contentId: Number(contentIdStr)
    })
    if (steps === 4) {
      // TODO: save review
      console.log('save data : ', data)
      router.push(`/review/${contentIdStr}`)
      initReviewStates()
    } else {
      gotoNext()
    }
  }
  return <div>
    <Image
      src={content?.thumbnail ?? ''}
      alt={content?.title ?? ''}
      width="848"
      height="477"
    />
    <form onSubmit={handleSubmit(onSubmitAction)}>
      <AnimatePresence>
        <ConditionalRender
          condition={steps}
          render={{
            1: <ReviewStep1 {...formProps} onGoBackAction={gotoPrev} contentUploadDate={content?.uploadDate} />,
            2: <ReviewStep2 {...formProps} onGoBackAction={gotoPrev} />,
            3: <ReviewStep3 {...formProps} onGoBackAction={gotoPrev} />,
            4: <ReviewStep4 {...formProps} onGoBackAction={gotoPrev} />,
          }}
        />
      </AnimatePresence>
    </form>
  </div>

}
ReviewWritePage.getLayout = (page) => {
  return <BrowserLayout headerType='browse'><ClientOnly>{page}</ClientOnly></BrowserLayout>
}

export default ReviewWritePage