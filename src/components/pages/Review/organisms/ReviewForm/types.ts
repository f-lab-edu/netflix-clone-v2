import type { ReviewWriteSteps } from '../../hooks/useReviewSteps';
import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';

export interface ReviewFormProps {
  steps: ReviewWriteSteps
  maxSteps: number
  onGoBackAction: () => void,
  onSubmitAction: (_steps: number, _formData: DramaReviewFormDataType) => void
}
