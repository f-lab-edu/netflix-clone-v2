import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { JotaiLocalStorage } from '@/state/util/Storage';

export const defaultReviewState = {
  contentId: 0,
  watchState: 'none',
  rate: 0,
  comment: '',
  watchEndDate: '',
  watchStartDate: '',
  willRecommend: false
}

const reviewStateAtom = atomWithStorage('write-review-state', defaultReviewState, JotaiLocalStorage<DramaReviewData>())

const useReviewState = () => useAtom(reviewStateAtom)

export default useReviewState