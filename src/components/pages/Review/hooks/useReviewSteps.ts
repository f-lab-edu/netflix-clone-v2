import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { JotaiLocalStorage } from '@/state/util/Storage';

export type ReviewWriteSteps = 1 | 2 | 3 | 4

const defaultReviewSteps = 1
const LAST_STEPS = 4

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
      if (prev < LAST_STEPS) return prev + 1 as ReviewWriteSteps
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
useReviewSteps.LAST_STEPS = LAST_STEPS

export default useReviewSteps
