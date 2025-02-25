import { useContext } from 'react'
import { PortalContext } from './context'

export const usePortal = () => {
  const context = useContext(PortalContext)
  if (!context) throw Error('Should define PortalProvider first')
  return context
}