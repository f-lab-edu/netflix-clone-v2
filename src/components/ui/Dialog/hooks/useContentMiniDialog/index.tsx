import type { DialogStyleFunction } from '../useMotionDialog';
import { useCallback, useMemo } from 'react';
import useMotionDialog from '../useMotionDialog';
import { ContentDetailShellCss, ContentDialogButtonAreaCss, ContentDialogImgShellCss, ContentDialogShellCss } from './style';
// import useWindowSize from '@/provider/WindowResizeProvider/hooks/useWindowSize';

export default function useContentMiniDialog(contentId: number) {
  // const { width } = useWindowSize()
  const { width } = useMemo(() => ({
    width: 840,
    height: 0
  }), [])
  const minLeft = useMemo(() => {
    return width * .04
  }, [width])
  const maxLeft = useMemo(() => {
    return width - minLeft
  }, [width, minLeft])

  const positionSize = useCallback<DialogStyleFunction>((rect) => {
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
      top: rect.top - rect.height / 4
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
  }, positionSize, {
    layoutId: `content-${contentId}`
  })
}