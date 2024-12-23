import { createContext } from 'react'

type RootDomContextType = {
  getRootDom: () => Element
}
const RootDomProviderContext = createContext<RootDomContextType>({
  getRootDom: () => document.body
})
export default RootDomProviderContext