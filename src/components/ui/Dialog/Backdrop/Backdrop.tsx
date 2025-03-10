import { motion } from 'motion/react'
import { DialogBackdropCss } from './style'

interface BackDropProps {
  backdropOpacity: number
  backdropDelay: string
}

export default function Backdrop({ backdropOpacity, backdropDelay }: BackDropProps) {
  return <motion.div
    transition={{
      duration: backdropDelay
    }}
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: backdropOpacity
    }}
    exit={{
      opacity: 0
    }}
    css={[DialogBackdropCss]}
  />
}