import type { MotionDialogTransitionFunc } from '../useMotionDialog';
import { useCallback, useMemo } from 'react';
import useMotionDialog from '../useMotionDialog';
import { ContentDetailShellCss, ContentDialogButtonAreaCss, ContentDialogImgShellCss, ContentDialogShellCss } from './style';
import useWindowSize from '@/provider/WindowResizeProvider/hooks/useWindowSize';

export default function useContentMiniDialog() {
  const { width } = useWindowSize()
  const minLeft = useMemo(() => {
    return width * .04
  }, [width])
  const maxLeft = useMemo(() => {
    return width - minLeft
  }, [width, minLeft])

  const disabledPosition = useCallback<MotionDialogTransitionFunc>((rect) => {
    return {
      left: rect.width * 0.5 + rect.left,
      top: rect.height * 0.5 + rect.top,
      width: 0,
      height: 0,
      opacity: 0,
      transition: { duration: 0 }
    }
  }, [])
  const activePosition = useCallback<MotionDialogTransitionFunc>((rect) => {
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
      height: 'auto',
      left: left,
      top: rect.top - rect.height / 4,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  }, [maxLeft, minLeft])

  return useMotionDialog((closeAction) => {
    return <div
      tabIndex={-1}
      css={ContentDialogShellCss}
      ref={(el) => {
        el?.focus()
      }}
      onBlur={() => closeAction(false)}
      onMouseLeave={() => closeAction(false)}
    >
      <div css={ContentDialogImgShellCss}></div>
      <div css={ContentDetailShellCss}>
        <div role="grid" css={ContentDialogButtonAreaCss}>
          sdf
        </div>
      </div>
    </div>
  }, {
    initial: disabledPosition,
    animate: activePosition,
    exit: disabledPosition,
  })
}