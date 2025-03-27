import { useRouter } from 'next/router'

export const useReviewRouter = (contentId: number) => {
  const router = useRouter()
  return {
    gotoWritePage: () => router.push(`/review/${contentId}/write`),
    gotoListPage: () => router.push(`/review/${contentId}`)
  }
}
