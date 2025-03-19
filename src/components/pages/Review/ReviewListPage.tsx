import type { NextPageWithLayout } from '@/pages/_app';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import BrowserLayout from '@/components/layout/BrowserLayout';
import useGetContentById from '@/hooks/Query/content/useGetContentById';

const ReviewListPage: NextPageWithLayout = () => {
  const { contentId } = useParams<{ contentId: string }>()
  const router = useRouter()
  const { data: content } = useGetContentById(Number(contentId))
  const gotoWriteReview = () => {
    router.push(`/review/${contentId}/write`)
  }
  return <div>
    <Image
      src={content?.thumbnail ?? ''}
      alt={content?.title ?? ''}
      width="848"
      height="477"
    />
    <div>
      <button onClick={gotoWriteReview}>
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
