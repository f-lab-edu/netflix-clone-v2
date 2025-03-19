import { createContext } from 'react'

type RootDomContextType = {
  getRootDom: () => HTMLElement | null
}
const RootDomProviderContext = createContext<RootDomContextType>({
  getRootDom: () => document.body
})
export default RootDomProviderContext
