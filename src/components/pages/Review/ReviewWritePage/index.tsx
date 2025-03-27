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

  const {
    handleSubmit,
    setValue,
    getValues,
    initReviewStates,
    ...formProps
  } = useReviewForm({
    contentUploadDate: content?.uploadDate ?? 0,
    steps,
    contentId: contentId
  })

  const onSubmitAction = (data: DramaReviewFormDataType) => {
    if (steps === 4) {
      // TODO: save review
      console.log('save data : ', data)
      router.push(`/review/${contentIdStr}`)
      initReviewStates()
      initSteps()
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
      <FormProvider
        {...formProps}
        handleSubmit={handleSubmit}
        setValue={setValue}
        getValues={getValues}
      >
        <AnimatePresence>
          <SwitchRender
            condition={steps}
            render={{
              1: <ReviewStep1 />,
              2: <ReviewStep2 onGoBackAction={gotoPrev} />,
              3: <ReviewStep3 onGoBackAction={gotoPrev} />,
              4: <ReviewStep4 onGoBackAction={gotoPrev} />,
            }}
          />
        </AnimatePresence>
      </FormProvider>
    </form>
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
