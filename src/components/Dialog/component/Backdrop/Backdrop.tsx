import { useMemo } from 'react'
import useAnimation from '@/provider/AnimationProvider/hooks/useAnimation'
import { DialogBackdrop, DialogBackdropEnd, DialogBackdropStanding, DialogBackdropStart } from './Styled'

interface BackDropProps {
  backdropOpacity: number
  backdropDelay: string
}

export default function Backdrop({ backdropOpacity, backdropDelay }: BackDropProps) {
  const { register, eventState, prevState, toggleEventState } = useAnimation()

  const Backdrop = useMemo(() => {
    if (prevState && !eventState) {
      return DialogBackdropStart
    } else if (prevState && eventState) {
      return DialogBackdropStanding
    } else if (!prevState && eventState) {
      return DialogBackdropEnd
    }
    return DialogBackdrop
  }, [prevState, eventState])
  return <Backdrop
    onClick={toggleEventState}
    {...register()} style={{
      '--backdrop-opacity': backdropOpacity,
      '--backdrop-animation-delay': backdropDelay
    }}></Backdrop>
}