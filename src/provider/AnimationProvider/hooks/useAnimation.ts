import { useContext } from 'react'
import AnimationProviderContext from '../provider/AnimationProviderContext'

export default function useAnimation() {
  const context = useContext(AnimationProviderContext)
  if (!context) {
    throw new Error('Wrong position')
  }
  return context
}