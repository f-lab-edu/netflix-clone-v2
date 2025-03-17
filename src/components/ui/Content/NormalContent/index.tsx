import type { KeyboardEventHandler, MouseEventHandler } from 'react';
import Image from 'next/image'
import { useRef } from 'react'
import calcStartRefRect from '../../Dialog/utils/calcStartRefRect'
import useContentDetailDialog from '../hooks/useContentDetailDialog'
import useContentMiniDialog from '../hooks/useContentMiniDialog'
import { NormalContentImageCss } from './style'

interface NormalContentProps {
  content: Content
}

export default function NormalContent({ content }: NormalContentProps) {
  const el = useRef<HTMLImageElement>(null)
  const { openDialog } = useContentMiniDialog()
  const { openDialog: openDetailDialog } = useContentDetailDialog()
  const willOpen = useRef<boolean>(false)
  const detailDialogOpenAction = (target: HTMLDivElement) => {
    const rect = calcStartRefRect(target, true)
    let endRect
    if (el.current) endRect = calcStartRefRect(el.current, true)
    openDetailDialog({
      contentId: content.id,
      rect,
      endRect
    })
  }
  const detailOpenByClick: MouseEventHandler = (e) => detailDialogOpenAction(e.target as HTMLDivElement)
  const detailOpenByKeyboard: KeyboardEventHandler = (e) => {
    if (e.key === 'enter') {
      detailDialogOpenAction(e.target as HTMLDivElement)
    }
  }
  return <div>
    <Image
      ref={el}
      css={NormalContentImageCss}
      src={content.thumbnail}
      width={320}
      height={180}
      alt={content.title}
      onClick={detailOpenByClick}
      onKeyUp={detailOpenByKeyboard}
      onMouseEnter={(e) => {
        willOpen.current = true
        setTimeout(() => {
          if (willOpen.current) {
            const rect = calcStartRefRect(e.target as HTMLElement)
            openDialog({
              rect,
              content,
              onClick: detailOpenByClick,
              onKeyUp: detailOpenByKeyboard
            })
          }
        }, 500)
      }}
      onMouseLeave={() => {
        willOpen.current = false
      }}
    />
  </div >
}