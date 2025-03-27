import type { DramaReviewFormDataType } from '@/lib/network/types/DramaReview';
import type { UseFormProps } from 'react-hook-form';

export interface useReviewFormProps {
  contentUploadDate: number,
  contentId: number,
  steps: number,
  storage?: Storage,
  onInit?: () => void,
  props?: UseFormProps<DramaReviewFormDataType>,
}
