import type { ContentDetailDialogProps } from './component';
import type { MotionDialogTransitionFunc } from '@/components/ui/Dialog/MotionDialog';
import { useCallback, useMemo, useState } from 'react';
import useHoldBackWindow from '@/components/ui/Dialog/hooks/useHoldBackWindow';
import { usePortal } from '@/components/ui/Dialog/provider/PortalProvider/hook';
import useRootDom from '@/provider/RootDom/hooks/useRootDom';
import { useWindowWidth } from '@/state/windowSize';
import ContentDetailDialog from './component';

const CONTENT_DETAIL_DIALOG_KEY = 'content-detail-dialog'

export default function useContentDetailDialog() {
  const { closePortal, openPortal: openDialogPortal } = usePortal()
  const [windowWidth] = useWindowWidth()
  const {
    getRootDom
  } = useRootDom()
  const rootDom = useMemo(() => getRootDom(), [getRootDom])

  const [isOpen, setIsOpen] = useState(false)
  useHoldBackWindow(isOpen, rootDom)

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
    setIsOpen(true)
    openDialogPortal(
      CONTENT_DETAIL_DIALOG_KEY,
      <ContentDetailDialog
        {...props}
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
      .then(() => {
        setIsOpen(false)
      })
  }

  return {
    closeDialog: () => closePortal(CONTENT_DETAIL_DIALOG_KEY),
    openDialog
  }
}