import type { ReviewWriteSteps } from '../../hooks/useReviewSteps';
import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import type { ReactNode } from 'react';

export interface ReviewFormProps {
  children: ReactNode
  steps: ReviewWriteSteps
  maxSteps: number
  onGoBackAction: () => void,
  onSubmitAction: (_steps: number, _formData: DramaReviewFormDataType) => void
}
