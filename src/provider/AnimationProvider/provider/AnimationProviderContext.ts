import type { SyntheticEvent } from 'react';
import { createContext } from 'react'

type AnimationContextType = {
  toggleEventState: (_e?: SyntheticEvent) => void
  register: () => {
    onAnimationStart: (_e: SyntheticEvent<HTMLElement>) => void
    onTransitionStart: (_e: SyntheticEvent<HTMLElement>) => void
  }
  eventState: boolean
  prevState: boolean
}
const AnimationProviderContext = createContext<AnimationContextType>({
  eventState: false,
  prevState: false,
  toggleEventState: () => { },
  register: () => ({
    onAnimationStart: () => { },
    onTransitionStart: () => { },
  })
})
export default AnimationProviderContext