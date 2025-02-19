import { createContext } from 'react'

export type WindowResizeProviderContextType = {
  width: number
  height: number
}
const WindowResizeProviderContext = createContext<WindowResizeProviderContextType>({
  width: 0,
  height: 0
})
export default WindowResizeProviderContext