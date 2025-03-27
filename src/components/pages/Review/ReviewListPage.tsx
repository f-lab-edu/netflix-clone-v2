import type { NextPageWithLayout } from '@/pages/_app';
import Image from 'next/image';
import BrowserLayout from '@/components/layout/BrowserLayout';
import useGetContentById from '@/hooks/Query/content/useGetContentById';
import useAssertParams from '@/hooks/useAssertParams';
import { useReviewRouter } from './hooks/useReviewRouter';
import { ReviewListPageParamRule } from './lib/paramRules';

const ReviewListPage: NextPageWithLayout = (params) => {
  const { contentId } = useAssertParams(ReviewListPageParamRule, params)
  const { data: content } = useGetContentById(contentId)
  const { gotoWritePage } = useReviewRouter(contentId)
  return <div>
    <Image
      src={content?.thumbnail ?? ''}
      alt={content?.title ?? ''}
      width="848"
      height="477"
    />
    <div>
      <button onClick={gotoWritePage}>
        Add Review
      </button>
    </div>
    <div>
      {/* TODO: review list */}
    </div>
  </div>

}
ReviewListPage.getLayout = (page) => {
  return <BrowserLayout headerType='browse'>{page}</BrowserLayout>
}

export default ReviewListPage
