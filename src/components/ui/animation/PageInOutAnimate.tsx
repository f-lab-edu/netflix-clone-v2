import type { ReactNode } from 'react';
import { motion } from 'motion/react'

export default function PageInOutAnimate({ className, children }: CssProps & { children: ReactNode }) {
  return <motion.div
    className={className}
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.75 }}
  >{children}</motion.div>
}
