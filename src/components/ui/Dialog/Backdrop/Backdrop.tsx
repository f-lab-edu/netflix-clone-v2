import { motion } from 'motion/react'
import { DialogBackdropCss } from './style'

interface BackDropProps {
  opacity: number
  delay: string
}

export default function Backdrop({ opacity, delay }: BackDropProps) {
  return <motion.div
    transition={{
      duration: delay
    }}
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: opacity
    }}
    exit={{
      opacity: 0
    }}
    css={[DialogBackdropCss]}
  />
}