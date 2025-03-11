import type { MotionDialogTransitionFunc } from '@/components/ui/Dialog/MotionDialog';
import type { DialogRect } from '@/components/ui/Dialog/provider/PortalProvider/context';
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
      width: rect.width,
      left: rect.left,
      top: rect.top,
      scale: rect.width / windowWidth,
      opacity: .2,
      transformOrigin: '0% 0% 0',
    }
  }, [windowWidth])
  const activePosition = useCallback<MotionDialogTransitionFunc>((rect) => {
    if (!rect) return {}
    return {
      width: windowWidth,
      left: 0,
      top: 0,
      scale: 1,
      opacity: 1,
    }
  }, [windowWidth])

  const openDialog = (content: Content, rect?: DialogRect, endRect?: DialogRect) => {
    setIsOpen(true)
    openDialogPortal(
      CONTENT_DETAIL_DIALOG_KEY,
      <ContentDetailDialog
        content={content}
        options={{
          initial: disabledPosition,
          animate: activePosition,
          exit: disabledPosition,
          transition: {
            duration: 0.5
          }
        }}
      />,
      rect,
      endRect
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