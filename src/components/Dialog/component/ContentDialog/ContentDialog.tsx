import type { SyntheticEvent } from 'react';
import useAnimation from '@/provider/AnimationProvider/hooks/useAnimation';
import { DialogContainer } from './Styled'

type CloseAction = () => void
export interface ContentDialogProps {
  children: (_closeAction: CloseAction) => React.ReactNode
  startPosition?: DOMRect
}

export default function ContentDialog({ children }: ContentDialogProps) {
  const { register, toggleEventState } = useAnimation()
  function closeAction(e?: SyntheticEvent) {
    toggleEventState(e)
  }

  // TODO: add animation for open/close action
  // Will trigger, when changed url

  return <DialogContainer {...register()} role="dialog">
    {children(closeAction)}
  </DialogContainer>
}