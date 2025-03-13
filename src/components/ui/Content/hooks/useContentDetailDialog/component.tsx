import type { MotionDialogProps } from '@/components/ui/Dialog/MotionDialog';
import type { PortalDialogInterface } from '@/components/ui/Dialog/provider/PortalProvider/context';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import Backdrop from '@/components/ui/Dialog/Backdrop';
import MotionDialog from '@/components/ui/Dialog/MotionDialog';
import ConditionalRender from '@/components/utils/ConditionalRender';
import useGetContentById from '@/hooks/Query/content/useGetContentById';
import CloseIcon from '@assets/netflix/close-icon.svg'
import { ContentDetailCloseBtn, ContentDetailControl, ContentDetailImage, ContentDetailImageArea, ContentDetailLayout, ContentDetailShell } from './style';

export interface ContentDetailDialogProps extends MotionDialogProps {
  contentId: number
}

export default function ContentDetailDialog({
  contentId,
  closePortal,
  css,
  ...props
}: PortalDialogInterface & ContentDetailDialogProps) {
  const router = useRouter()
  const { data: content } = useGetContentById(contentId)

  const closeDialog = useCallback(() => {
    if (closePortal) closePortal(false)
  }, [closePortal])
  const gotoReview = () => {
    router.push({
      pathname: `/review/${contentId}`
    })
    closeDialog()
  }
  return <>
    <Backdrop css={css} opacity={.7} transition={props.options?.transition} />
    <MotionDialog {...props} isFixed css={[
      css,
      ContentDetailShell
    ]}>
      <ConditionalRender.Boolean
        condition={Boolean(content)}
        render={{
          true: <div css={ContentDetailLayout}>
            <div css={ContentDetailImageArea}>
              <Image
                css={ContentDetailImage}
                width="848"
                height="477"
                src={content?.thumbnail || ''}
                alt={content?.title || ''}
              />
              <div css={ContentDetailControl}>
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
            </div>
            <div>
              <div>
                <p>
                  {content?.uploadDate}
                  &nbsp;
                  {content?.playtime}
                </p>
                <p>
                  {content?.description}
                </p>
              </div>
              <div>
                <div>
                  출연: {content?.actors.map(v => v.name).join(',')}
                </div>
                <div>
                  장르: {content?.genres.map(v => v.name).join(',')}
                </div>
                <div>
                  영화 특징: {content?.specific.map(v => v.name).join(',')}
                </div>
              </div>
            </div>
          </div>
        }}
      />
    </MotionDialog>
  </>
}