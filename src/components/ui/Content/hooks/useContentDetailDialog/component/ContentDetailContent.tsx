import type { ContentDetailDialogProps } from './ContentDetailDialog';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import useGetContentById from '@/hooks/Query/content/useGetContentById';
import CloseIcon from '@assets/netflix/close-icon.svg'
import { ContentDetailCloseBtn, ContentDetailControl, ContentDetailImage, ContentDetailImageArea, ContentDetailLayout } from '../style';
import ContentDetailError from './ContentDetailError';
import ContentDetailSkeleton from './ContentDetailSkeleton';

const ContentDetailContent = ({
  contentId,
  closePortal,
}: Omit<ContentDetailDialogProps, 'hasBackdrop'>) => {
  const router = useRouter()
  const { data: content } = useGetContentById(contentId)

  const closeDialog = useCallback(() => {
    if (closePortal) closePortal(false)
  }, [closePortal])
  const gotoReview = () => {
    router.push({
      pathname: `/review/${contentId}`
    }).then(() => closeDialog())
  }
  return <main css={ContentDetailLayout}>
    <section aria-label="image content" css={ContentDetailImageArea}>
      <Image
        css={ContentDetailImage}
        width="848"
        height="477"
        src={content?.thumbnail || ''}
        alt={content?.title || ''}
      />
      <div role="controll" css={ContentDetailControl}>
        <button css={ContentDetailCloseBtn} onClick={closeDialog}>
          <CloseIcon />
        </button>
        <div>
          <h2>
            {content?.title}
          </h2>
          <div>
            <button>재생</button>
            <button onClick={gotoReview}>Review</button>
          </div>
        </div>
        <button>
          {/* Mute */}
        </button>
      </div>
    </section>
    <section aria-label="text content">
      <div role="contentinfo">
        <p>
          {content?.uploadDate}
          &nbsp;
          {content?.playtime}
        </p>
        <p>
          {content?.description}
        </p>
      </div>
      <div role="contentinfo">
        <p>
          출연: {content?.actors.map(v => v.name).join(',')}
        </p>
        <p>
          장르: {content?.genres.map(v => v.name).join(',')}
        </p>
        <p>
          영화 특징: {content?.specific.map(v => v.name).join(',')}
        </p>
      </div>
    </section>
  </main>
}

export default Object.assign(ContentDetailContent, {
  Error: ContentDetailError,
  Skeleton: ContentDetailSkeleton
})
