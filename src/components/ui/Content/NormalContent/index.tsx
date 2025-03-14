import { motion } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import useContentMiniDialog from '../../Dialog/hooks/useContentMiniDialog'
import calcStartRefRect from '../../Dialog/utils/calcStartRefRect'
import { NormalContentImageCss } from './style'

interface NormalContentProps {
  content: Content
}

const MotionImage = motion(Image)

export default function NormalContent({ content }: NormalContentProps) {
  const { openDialog } = useContentMiniDialog()
  const willOpen = useRef<boolean>(false)

  return <div>
    <MotionImage
      css={NormalContentImageCss}
      src={content.thumbnail}
      width={320}
      height={180}
      alt={content.title}
      onMouseEnter={(e) => {
        willOpen.current = true
        setTimeout(() => {
          if (willOpen.current) {
            const rect = calcStartRefRect(e.target as HTMLElement)
            openDialog(rect)
          }
        }, 500)
      }}
      onMouseLeave={() => {
        willOpen.current = false
      }}
    />
  </div >
}