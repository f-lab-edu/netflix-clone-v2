import type { DialogObj, DialogRect } from '@/components/ui/Dialog/provider/PortalProvider/context';
import type { MotionProps, TargetAndTransition } from 'motion/react';
import type { ReactElement } from 'react';
import { motion } from 'motion/react';

export type MotionDialogTransitionFunc = (_rect?: DialogRect) => TargetAndTransition

interface MotionPropsOverwrite {
  initial?: MotionDialogTransitionFunc,
  animate?: MotionDialogTransitionFunc,
  exit?: MotionDialogTransitionFunc
}

export type MotionDialogOptions = Omit<MotionProps, 'initial' | 'animate' | 'exit'> & MotionPropsOverwrite

export interface MotionDialogProps extends DialogObj {
  options?: MotionDialogOptions
  children?: ReactElement<{ closePortal: () => void }>
  rect?: DialogRect
}

export default function MotionDialog({
  isOpen,
  options,
  children,
  rect,
  zIndex,
}: MotionDialogProps) {
  return <motion.div
    layoutDependency={isOpen}
    {...options}
    initial={options?.initial ? options.initial(rect) : undefined}
    animate={options?.animate ? options.animate(rect) : undefined}
    exit={options?.exit ? options.exit(rect) : undefined}
    style={{
      zIndex: zIndex,
      position: 'absolute',
      ...options?.style,
    }}
    transition={{ duration: .5, ...options?.transition }}
  >
    {children}
  </motion.div>
}