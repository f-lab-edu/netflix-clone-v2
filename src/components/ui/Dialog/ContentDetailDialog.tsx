import type { ContentDialogProps } from './component/ContentDialog/ContentDialog';
import type { ReactElement } from 'react';
import { useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import useAnimationControl from '@/provider/AnimationProvider/hooks/useAnimationControl'
import AnimationProviderContext from '@/provider/AnimationProvider/provider/AnimationProviderContext'
import useRootDom from '@/provider/RootDom/hooks/useRootDom'
import Backdrop from './component/Backdrop'
import ContentDialog from './component/ContentDialog';
import useHoldBackWindow from './hooks/useHoldBackWindow';

type OpenAction = () => void
type SetRef = (_ref: HTMLAnchorElement) => void
interface ContentDetailDialogProps extends ContentDialogProps {
  activator: (_openAction: OpenAction, _setElement: SetRef) => ReactElement
}

export default function ContentDetailDialog({ activator, ...contentProps }: ContentDetailDialogProps) {
  const {
    getRootDom
  } = useRootDom()
  const { register, toggleEventState, eventState, prevState } = useAnimationControl()

  const rootDom = useMemo(() => getRootDom(), [getRootDom])
  const activatorRef = useRef<HTMLElement>(null)
  const [activatorPosition, setActivatorPosition] = useState<DOMRect>()
  useHoldBackWindow(eventState, prevState, rootDom)
  const activatorMemo = useMemo(() => {
    return activator(toggleEventState, (ref) => {
      activatorRef.current = ref
      setActivatorPosition(activatorRef.current?.getBoundingClientRect())
    })
  }, [activator, toggleEventState])

  return <AnimationProviderContext.Provider value={{
    register, toggleEventState, eventState, prevState
  }}>
    {activatorMemo}
    {rootDom && (eventState || prevState) ? createPortal(
      <>
        <Backdrop backdropDelay='.5s' backdropOpacity={0.7} ></Backdrop>
        <ContentDialog {...contentProps} startPosition={activatorPosition} />
      </>
      , rootDom
    ) : null}
  </AnimationProviderContext.Provider>
}