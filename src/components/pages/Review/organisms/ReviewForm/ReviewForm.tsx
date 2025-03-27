import type { ReviewFormProps } from './types';
import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import { AnimatePresence } from 'motion/react';
import { useFormContext } from 'react-hook-form'
import ConditionalRender from '@/components/utils/ConditionalRender';
import SwitchRender from '@/components/utils/SwitchRender';
import ReviewStep1 from '../../molecules/ReviewStep1';
import ReviewStep2 from '../../molecules/ReviewStep2';
import ReviewStep3 from '../../molecules/ReviewStep3';
import ReviewStep4 from '../../molecules/ReviewStep4';

const ReviewForm = ({
  steps,
  maxSteps,
  onGoBackAction,
  onSubmitAction
}: ReviewFormProps) => {
  const { handleSubmit } = useFormContext<DramaReviewFormDataType>()
  const onSubmit = (formData: DramaReviewFormDataType) => {
    onSubmitAction(steps, formData)
  }
  return <form onSubmit={handleSubmit(onSubmit)}>
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
    <div aria-label="go back or submit button area">
      <ConditionalRender.Boolean
        condition={steps === 1}
        render={{
          false: <button type="button" onClick={onGoBackAction} aria-label="Goto Before Step Button">
            Goto Before
          </button>
        }}
      />
      <ConditionalRender.Boolean
        condition={steps === maxSteps}
        render={{
          true: <button type='submit' aria-label="Save Button">
            Save
          </button>,
          false: <button type='submit' aria-label="Goto Next Step Button">
            Next
          </button>
        }}
      />
    </div>
  </form>
}
export default ReviewForm
