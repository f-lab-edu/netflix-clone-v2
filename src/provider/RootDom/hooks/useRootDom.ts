import { useContext } from 'react'
import RootProviderContext from '../provider/RootDomProviderContext'

export default function useRootDom() {
  const context = useContext(RootProviderContext)
  if (!context) {
    throw new Error('Wrong position')
  }
  return context
}
