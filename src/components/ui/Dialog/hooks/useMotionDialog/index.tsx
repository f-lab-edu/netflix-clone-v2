import type { CSSObject, Interpolation, SerializedStyles } from '@emotion/react';
import type { MotionProps } from 'motion/react';
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

export default function useMotionDialog<T>(
  children: (_closeAction: (_result: T) => void) => ReactNode,
  visibleStyle: ((_startPointRect: DialogRect) => CSSObject | SerializedStyles) | CSSObject | SerializedStyles,
  options?: MotionProps
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
    if (!rootRef || !isOpen) return { width: 0, height: 0, left: 0, top: 0 }
    if (!computedOptions.layoutId && startEl !== rootRef && !(startEl instanceof HTMLElement)) {
      return {
        zIndex: parentZIndex,
        left: 0,
        top: 0,
        width: 0,
        height: 0
      }
    }

    const rect = startEl.getBoundingClientRect()
    return {
      zIndex: parentZIndex + 10,
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    }
  }, [isOpen, computedOptions.layoutId, rootRef, startEl, parentZIndex])

  const displayedRect = useMemo(() => typeof visibleStyle === 'function' ? visibleStyle(rootRefRect) : visibleStyle, [visibleStyle, rootRefRect])

  const styleCss = useMemo<Interpolation | undefined>(() => rootRefRect.zIndex ? {
    zIndex: rootRefRect.zIndex,
    ...displayedRect
  } : undefined, [rootRefRect, displayedRect])

  const rootProps = useMemo(() => {
    const startPosition: { opacity: number, scale?: number } = {
      opacity: 0
    }
    const displayPosition: { opacity: number, scale?: number } = {
      opacity: 1
    }
    if (!computedOptions.layoutId) {
      startPosition.scale = 0
      displayPosition.scale = 1
    }
    return {
      layoutDependency: isOpen,
      initial: startPosition,
      animate: displayPosition,
      exit: startPosition,
      ...computedOptions
    }
  }, [isOpen, computedOptions])
  const portal = createPortal(
    <AnimatePresence>
      {
        isOpen && <motion.div
          css={styleCss}
          viewport={{ amount: 'all' }}
          {...rootProps}
          transition={{ duration: .5 }}
        >
          {children(closeDialog)}
        </motion.div>
      }
    </AnimatePresence>,
    rootEl,
    'as'
  )
  return {
    onClick: openDialog,
    portal,
    ref: setRootRef
  }
}