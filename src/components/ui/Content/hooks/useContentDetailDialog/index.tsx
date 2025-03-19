import type { ContentDetailDialogProps } from './component/ContentDetailDialog';
import type { MotionDialogTransitionFunc } from '@/components/ui/Dialog/MotionDialog';
import { useCallback } from 'react';
import { usePortal } from '@/components/ui/Dialog/provider/PortalProvider/hook';
import { useWindowWidth } from '@/state/windowSize';
import ContentDetailDialog from './component/ContentDetailDialog';

const CONTENT_DETAIL_DIALOG_KEY = 'content-detail-dialog'

export default function useContentDetailDialog() {
  const { closePortal, openPortal: openDialogPortal } = usePortal()
  const [windowWidth] = useWindowWidth()

  const disabledPosition = useCallback<MotionDialogTransitionFunc>((rect) => {
    if (!rect) return {}
    return {
      left: rect.left,
      top: rect.top,
      scale: rect.width / windowWidth,
      opacity: .2,
      transformOrigin: '0% 0% 0',
    }
  }, [windowWidth])
  const activePosition = useCallback<MotionDialogTransitionFunc>(() => {
    return {
      left: 0,
      top: 0,
      scale: 1,
      opacity: 1,
    }
  }, [])

  const openDialog = (props: ContentDetailDialogProps) => {
    openDialogPortal(
      CONTENT_DETAIL_DIALOG_KEY,
      <ContentDetailDialog
        {...props}
        hasBackdrop
        options={{
          initial: disabledPosition,
          animate: activePosition,
          exit: disabledPosition,
          transition: {
            duration: .3
          }
        }}
      />
    )
  }

  return {
    closeDialog: () => closePortal(CONTENT_DETAIL_DIALOG_KEY),
    openDialog
  }
}
