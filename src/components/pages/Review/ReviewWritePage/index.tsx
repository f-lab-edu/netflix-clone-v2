import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import type { NextPageWithLayout } from '@/pages/_app';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { FormProvider } from 'react-hook-form';
import BrowserLayout from '@/components/layout/BrowserLayout';
import ClientOnly from '@/components/utils/ClientOnly';
import SuspenseErrorBoundary from '@/components/utils/SuspenseErrorBoundary';
import SwitchRender from '@/components/utils/SwitchRender';
import useGetContentById from '@/hooks/Query/content/useGetContentById';
import ReviewForm from '../components/ReviewForm';
import ReviewStep1 from '../components/ReviewStep1';
import ReviewStep2 from '../components/ReviewStep2';
import ReviewStep3 from '../components/ReviewStep3';
import ReviewStep4 from '../components/ReviewStep4';
import useReviewForm from '../hooks/useReviewForm';
import useReviewSteps from '../hooks/useReviewSteps';
import ReviewWritePageSkeleton from './Skeleton';

const ReviewWritePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { contentId: contentIdStr } = useParams<{ contentId: string }>()
  const contentId = Number(contentIdStr)
  const { data: content } = useGetContentById(contentId)
  const { steps, gotoNext, gotoPrev, initSteps } = useReviewSteps()

  const form = useReviewForm({
    contentUploadDate: content?.uploadDate ?? 0,
    steps,
    contentId: contentId
  })
  const { initReviewStates, saveFormData } = form

  const onSubmitAction = (steps: number, data: DramaReviewFormDataType) => {
    if (steps === useReviewSteps.LAST_STEPS) {
      // TODO: save review
      console.log('save data : ', data)
      router.push(`/review/${contentIdStr}`)
      initReviewStates()
      initSteps()
    } else {
      saveFormData()
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
    <FormProvider {...form}>
      <ReviewForm
        maxSteps={useReviewSteps.LAST_STEPS}
        steps={steps}
        onGoBackAction={gotoPrev}
        onSubmitAction={onSubmitAction}
      >
        <AnimatePresence>
          <SwitchRender
            condition={steps}
            render={{
              1: <ReviewStep1 />,
              2: <ReviewStep2 />,
              3: <ReviewStep3 />,
              4: <ReviewStep4 />,
            }}
          />
        </AnimatePresence>
      </ReviewForm>
    </FormProvider>
  </div>
}

ReviewWritePage.getLayout = (page) => {
  return <BrowserLayout headerType='browse'>
    <ClientOnly>
      <SuspenseErrorBoundary
        loadingFallback={<ReviewWritePageSkeleton />}
        errorFallback={({ error }) => <div>
          {error}
        </div>}
      >
        {page}
      </SuspenseErrorBoundary>
    </ClientOnly>
  </BrowserLayout>
}

export default ReviewWritePage
