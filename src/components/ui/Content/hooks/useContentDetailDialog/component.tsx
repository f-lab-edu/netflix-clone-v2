import type { MotionDialogProps } from '@/components/ui/Dialog/MotionDialog';
import type { PortalDialogInterface } from '@/components/ui/Dialog/provider/PortalProvider/context';
import Image from 'next/image';
import { useCallback } from 'react';
import Backdrop from '@/components/ui/Dialog/Backdrop';
import MotionDialog from '@/components/ui/Dialog/MotionDialog';
import CloseIcon from '@assets/netflix/close-icon.svg'
import { ContentDetailCloseBtn, ContentDetailControl, ContentDetailImage, ContentDetailImageArea, ContentDetailLayout, ContentDetailShell } from './style';

export default function ContentDetailDialog({
  content,
  closePortal,
  css,
  ...props
}: PortalDialogInterface & MotionDialogProps & { content: Content }) {
  const closeDialog = useCallback(() => {
    if (closePortal) closePortal(false)
  }, [closePortal])

  return <>
    <Backdrop css={css} opacity={.7} transition={props.options?.transition} />
    <MotionDialog {...props} css={[
      css,
      ContentDetailShell
    ]}>
      <div css={ContentDetailLayout}>
        <div css={ContentDetailImageArea}>
          <Image
            css={ContentDetailImage}
            width="848"
            height="477"
            src={content.thumbnail}
            alt={content.title}
          />
          <div css={ContentDetailControl}>
            <button css={ContentDetailCloseBtn} onClick={closeDialog}>
              <CloseIcon />
            </button>
            <div></div>
            <button>
              {/* Mute */}
            </button>
          </div>
        </div>
        <div css={{ height: 2000 }}></div>
      </div>
    </MotionDialog>
  </>
}