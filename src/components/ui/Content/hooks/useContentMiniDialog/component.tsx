import type { MotionDialogProps } from '@/components/ui/Dialog/MotionDialog';
import type { PortalDialogInterface } from '@/components/ui/Dialog/provider/PortalProvider/context';
import type { MouseEventHandler } from 'react';
import Image from 'next/image'
import { useCallback } from 'react';
import MotionDialog from '@/components/ui/Dialog/MotionDialog';
import calcStartRefRect from '@/components/ui/Dialog/utils/calcStartRefRect';
import useContentDetailDialog from '../useContentDetailDialog';
import { ContentDetailShellCss, ContentDialogButtonAreaCss, ContentDialogImgShellCss, ContentDialogShellCss } from './style'

export default function MiniDialog({
  closePortal,
  content,
  rect,
  ...props
}: PortalDialogInterface & MotionDialogProps & { content: Content }) {
  const {
    openDialog: openContentDetailDialog
  } = useContentDetailDialog()
  const openDetailDialog = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    const startRect = calcStartRefRect(e.target as HTMLElement)
    if (closePortal) {
      closePortal()
    }
    openContentDetailDialog(content, startRect, rect)
  }, [openContentDetailDialog, content, rect, closePortal])
  return <MotionDialog {...props} rect={rect}>
    <div
      tabIndex={-1}
      css={ContentDialogShellCss}
      ref={(el) => {
        el?.focus()
      }}
      onClick={openDetailDialog}
      onBlur={() => closePortal && closePortal()}
      onMouseLeave={() => closePortal && closePortal()}
    >
      <Image
        css={ContentDialogImgShellCss}
        src={content.thumbnail}
        alt="Harbin"
        width={320}
        height={180}
      />
      <div css={ContentDetailShellCss}>
        <div role="grid" css={ContentDialogButtonAreaCss}>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  </MotionDialog>
}