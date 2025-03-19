import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { JotaiLocalStorage } from '@/state/util/Storage';

type ReviewWriteSteps = 1 | 2 | 3 | 4

export const defaultReviewSteps = 1

const reviewStateAtom = atomWithStorage('write-review-steps', defaultReviewSteps, JotaiLocalStorage<ReviewWriteSteps>())

const useReviewSteps = () => {
  const [steps, setSteps] = useAtom(reviewStateAtom)
  const gotoPrev = () => {
    setSteps(prev => {
      if (prev > 1) return prev - 1 as ReviewWriteSteps
      return prev
    })
  }
  const gotoNext = () => {
    setSteps(prev => {
      if (prev < 4) return prev + 1 as ReviewWriteSteps
      return prev
    })
  }
  const initSteps = () => {
    setSteps(1)
  }
  return {
    steps,
    initSteps,
    gotoPrev,
    gotoNext,
  }
}

export default useReviewSteps