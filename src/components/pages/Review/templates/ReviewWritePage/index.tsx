import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import type { NextPageWithLayout } from '@/pages/_app';
import type { FC } from 'react';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { FormProvider } from 'react-hook-form';
import BrowserLayout from '@/components/layout/BrowserLayout';
import ClientOnly from '@/components/utils/ClientOnly';
import SuspenseErrorBoundary from '@/components/utils/SuspenseErrorBoundary';
import SwitchRender from '@/components/utils/SwitchRender';
import useGetContentById from '@/hooks/Query/content/useGetContentById';
import useAssertParams from '@/hooks/useAssertParams';
import useReviewForm from '../../hooks/useReviewForm';
import { useReviewRouter } from '../../hooks/useReviewRouter';
import useReviewSteps from '../../hooks/useReviewSteps';
import { ReviewWritePageParamRule } from '../../lib/paramRules';
import ReviewStep1 from '../../molecules/ReviewStep1';
import ReviewStep2 from '../../molecules/ReviewStep2';
import ReviewStep3 from '../../molecules/ReviewStep3';
import ReviewStep4 from '../../molecules/ReviewStep4';
import ReviewForm from '../../organisms/ReviewForm';
import { SkeletonImgCss } from '../../templates/ReviewWritePage/style';

const ReviewWritePage: NextPageWithLayout = (params) => {
  const { contentId } = useAssertParams(ReviewWritePageParamRule, params)
  const { gotoListPage } = useReviewRouter(contentId)
  const { data: content } = useGetContentById(contentId)
  const { steps, gotoNext, gotoPrev, initSteps } = useReviewSteps()

  const form = useReviewForm({
    contentUploadDate: content?.uploadDate ?? 0,
    steps,
    contentId
  })
  const { initReviewStates, saveFormData } = form

  const onSubmitAction = (steps: number, data: DramaReviewFormDataType) => {
    if (steps === useReviewSteps.LAST_STEPS) {
      // TODO: save review
      console.log('save data : ', data)
      gotoListPage()
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
const ReviewWritePageSkeleton: FC = () => {
  return <div>
    <img
      css={SkeletonImgCss}
      alt="skeleton"
    />
  </div>
}

ReviewWritePage.Skeleton = ReviewWritePageSkeleton

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
