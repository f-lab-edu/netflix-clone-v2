import type { ReviewFormProps } from './types';
import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import { useFormContext } from 'react-hook-form'
import ConditionalRender from '@/components/utils/ConditionalRender';

const ReviewForm = ({
  children,
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
    {children}
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
