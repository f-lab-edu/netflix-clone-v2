import type { DialogPropsObj, DialogRect } from '@/components/ui/Dialog/provider/PortalProvider/context';
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

export interface MotionDialogProps extends DialogPropsObj {
  options?: MotionDialogOptions
  children?: ReactElement<{ closePortal: () => void }>
  rect?: DialogRect,
  endRect?: DialogRect
}

export default function MotionDialog({
  isOpen,
  options,
  rect,
  endRect = rect,
  ...props
}: MotionDialogProps) {
  return <motion.div
    layoutDependency={isOpen}
    {...options}
    initial={options?.initial ? options.initial(rect) : undefined}
    animate={options?.animate ? options.animate(rect) : undefined}
    exit={options?.exit ? options.exit(endRect) : undefined}
    css={{ position: 'absolute' }}
    transition={{ duration: .5, ...options?.transition }}
    {...props}
  />
}