import { createContext } from 'react'

type WindowResizeProviderContextType = {
  width: number
}
const WindowResizeProviderContext = createContext<WindowResizeProviderContextType>({
  width: 0
})
export default WindowResizeProviderContext