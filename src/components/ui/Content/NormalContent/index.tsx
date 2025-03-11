import type { MouseEventHandler } from 'react';
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
  const detailDialogOpenAction: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = calcStartRefRect(e.target as HTMLDivElement, true)
    let endRect
    if (el.current) endRect = calcStartRefRect(el.current, true)
    openDetailDialog({
      contentId: content.id,
      rect,
      endRect
    })
  }
  return <div>
    <Image
      ref={el}
      css={NormalContentImageCss}
      src={content.thumbnail}
      width={320}
      height={180}
      alt={content.title}
      onClick={detailDialogOpenAction}
      onMouseEnter={(e) => {
        willOpen.current = true
        setTimeout(() => {
          if (willOpen.current) {
            const rect = calcStartRefRect(e.target as HTMLElement)
            openDialog({
              rect,
              content,
              onClick: detailDialogOpenAction
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