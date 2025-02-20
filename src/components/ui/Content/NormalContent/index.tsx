import { motion } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import useContentMiniDialog from '../../Dialog/hooks/useContentMiniDialog'
import { NormalContentImageCss } from './style'

interface NormalContentProps {
  content: Content
}

const MotionImage = motion(Image)

export default function NormalContent({ content }: NormalContentProps) {
  const { openDialog, portal, ref } = useContentMiniDialog()
  const willOpen = useRef<boolean>(false)

  return <div ref={ref}>
    <MotionImage
      css={NormalContentImageCss}
      src={content.thumbnail}
      width={320}
      height={180}
      alt={content.title}
      onMouseEnter={() => {
        willOpen.current = true
        setTimeout(() => {
          if (willOpen.current) {
            openDialog()
          }
        }, 500)
      }}
      onMouseLeave={() => {
        willOpen.current = false
      }}
    />
    {portal}
  </div >
}