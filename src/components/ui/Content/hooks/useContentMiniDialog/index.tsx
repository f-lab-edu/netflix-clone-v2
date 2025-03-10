import type { MotionDialogTransitionFunc } from '@/components/ui/Dialog/MotionDialog';
import type { DialogRect } from '@/components/ui/Dialog/provider/PortalProvider/context';
import { useCallback, useMemo } from 'react';
import { usePortal } from '@/components/ui/Dialog/provider/PortalProvider/hook';
import { useWindowWidth } from '@/state/windowSize';
import MiniDialog from './component';

const CONTENT_MINI_DIALOG_KEY = 'content-mini-dialog'

export default function useContentMiniDialog() {

  const { closePortal, openPortal: openDialogPortal } = usePortal()

  const [width] = useWindowWidth()
  const minLeft = useMemo(() => {
    return width * .04
  }, [width])
  const maxLeft = useMemo(() => {
    return width - minLeft
  }, [width, minLeft])

  const disabledPosition = useCallback<MotionDialogTransitionFunc>((rect) => {
    if (!rect) return {}
    const width = rect.width * 1.5
    return {
      width: width,
      left: rect.left,
      top: rect.top,
      scale: rect.width / width,
      opacity: .2,
      transformOrigin: '0% 0% 0',
    }
  }, [])
  const activePosition = useCallback<MotionDialogTransitionFunc>((rect) => {
    if (!rect) return {}
    const width = rect.width * 1.5
    const padSize = rect.width / 4
    let left = 0
    if (rect.left < minLeft) {
      left = minLeft
    } else if (maxLeft < rect.left + padSize + rect.width) {
      left = maxLeft - width
    } else {
      left = rect.left - padSize
    }
    return {
      width: width,
      left: left,
      top: rect.top - rect.height / 4,
      scale: 1,
      opacity: 1,
    }
  }, [maxLeft, minLeft])

  const openDialog = (rect: DialogRect, content: Content) => {
    openDialogPortal(CONTENT_MINI_DIALOG_KEY, <MiniDialog
      content={content}
      options={{
        initial: disabledPosition,
        animate: activePosition,
        exit: disabledPosition,
        style: {
          transformOrigin: '50% 50% 0',
          height: 'auto',
        },
        transition: {
          duration: 0.3
        }
      }}
    />, rect)
  }

  return {
    closeDialog: () => closePortal(CONTENT_MINI_DIALOG_KEY),
    openDialog
  }
}