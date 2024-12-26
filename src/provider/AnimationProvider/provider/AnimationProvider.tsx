import type { ReactNode } from 'react';
import useAnimationControl from '../hooks/useAnimationControl';
import AnimationProviderContext from './AnimationProviderContext';

export default function AnimationProvider({ children }: { children: ReactNode }) {
  const control = useAnimationControl()
  return <AnimationProviderContext.Provider value={control}>
    {children}
  </AnimationProviderContext.Provider>
}