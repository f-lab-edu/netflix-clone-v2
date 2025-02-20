import type { MotionProps, TargetAndTransition } from 'motion/react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react'
import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import useCallbackRef from '@/hooks/useCallbackRef';
import useRootDom from '@/provider/RootDom/hooks/useRootDom'

interface DialogRect {
  left: number
  top: number
  width: number
  height: number
  maxWidth?: number
  maxHeight?: number
}

export type MotionDialogTransitionFunc = (_rect: DialogRect) => TargetAndTransition

interface MotionPropsOverwrite {
  initial?: MotionDialogTransitionFunc,
  animate?: MotionDialogTransitionFunc,
  exit?: MotionDialogTransitionFunc
}

export default function useMotionDialog<T>(
  children: (_closeAction: (_result: T) => void) => ReactNode,
  options?: Omit<MotionProps, 'initial' | 'animate' | 'exit'> & MotionPropsOverwrite
) {
  const computedOptions = useMemo(() => options ?? {}, [options])
  const [promise, setPromise] = useState<PromiseWithResolvers<T> | undefined>(undefined)
  const isOpen = useMemo(() => !!promise, [promise])

  const [rootRef, setRootRef] = useCallbackRef<HTMLElement | undefined>(undefined)

  const openDialog = () => {
    const temp = {} as PromiseWithResolvers<T>
    temp.promise = new Promise<T>((resolve, reject) => {
      temp.resolve = resolve
      temp.reject = reject
    }).finally(() => {
      setPromise(undefined)
    })
    setPromise(temp)
    return temp.promise
  }
  const closeDialog = (result: T) => {
    promise?.resolve(result)
  }

  const { getRootDom } = useRootDom()
  const rootEl = useMemo(() => getRootDom() ?? document.body, [getRootDom])
  const startEl = useMemo(() => rootRef ?? rootEl, [rootRef, rootEl])

  const parentZIndex = useMemo(() => {
    let el: HTMLElement | null = startEl
    let zIndex = -1
    do {
      const computedStyle = el?.computedStyleMap()
      const currentIdx = Number(computedStyle.get('z-index')?.toString())
      if (isNaN(currentIdx)) {
        el = el.parentElement
        continue;
      }
      zIndex = currentIdx
    } while (el && zIndex === -1)
    if (zIndex === -1) zIndex = 0
    return zIndex
  }, [startEl])

  const rootRefRect = useMemo(() => {
    const defaultObj = { width: 0, height: 0, left: 0, top: 0 }
    if (!rootRef) return defaultObj
    if (!computedOptions.layoutId && startEl !== rootRef && !(startEl instanceof HTMLElement)) {
      return defaultObj
    }
    const rect = startEl.getBoundingClientRect()
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height,
    }
  }, [computedOptions.layoutId, rootRef, startEl])

  const initialProps = useMemo(() => computedOptions?.initial ? computedOptions.initial(rootRefRect) : undefined, [computedOptions, rootRefRect])
  const animateProps = useMemo(() => computedOptions?.animate ? computedOptions.animate(rootRefRect) : undefined, [computedOptions, rootRefRect])
  const exitProps = useMemo(() => computedOptions?.exit ? computedOptions.exit(rootRefRect) : undefined, [computedOptions, rootRefRect])

  const rootProps = useMemo(() => {
    return {
      layoutDependency: isOpen,
      ...computedOptions,
      initial: initialProps,
      animate: animateProps,
      exit: exitProps,
    }
  }, [
    isOpen,
    computedOptions,
    initialProps,
    animateProps,
    exitProps
  ])
  const portal = createPortal(
    <AnimatePresence>
      {
        isOpen && <motion.div
          style={{
            ...rootProps.style,
            zIndex: parentZIndex + 10,
            position: 'absolute'
          }}
          transition={{ duration: .5 }}
          {...rootProps}
        >
          {children(closeDialog)}
        </motion.div>
      }
    </AnimatePresence>,
    rootEl,
    'as'
  )
  return {
    openDialog,
    portal,
    ref: setRootRef
  }
}