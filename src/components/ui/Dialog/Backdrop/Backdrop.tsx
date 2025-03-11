import type { Transition } from 'motion/react';
import { motion } from 'motion/react'
import { DialogBackdropCss } from './style'

interface BackDropProps {
  opacity: number
  transition?: Transition
}

export default function Backdrop({ opacity, transition }: BackDropProps) {
  return <motion.div
    layoutDependency={true}
    transition={{
      duration: .5,
      ...transition
    }}
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: opacity,
    }}
    exit={{
      opacity: 0
    }}
    css={[DialogBackdropCss]}
  />
}