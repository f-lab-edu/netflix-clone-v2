import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { JotaiLocalStorage } from '@/state/util/Storage';

export const defaultReviewState: DramaReviewFormData = {
  contentId: 0,
  watchState: 'none',
  rate: 5,
  comment: '',
  watchEndDate: '',
  watchStartDate: '',
  isPublic: 'false',
  willRecommend: 'false'
}

const reviewStateAtom = atomWithStorage('write-review-state', defaultReviewState, JotaiLocalStorage<DramaReviewFormData>())

const useReviewState = () => useAtom(reviewStateAtom)

export default useReviewState