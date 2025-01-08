import { createContext } from 'react'

export interface InputLayoutContextValues {
  isValid: boolean,
  isError: boolean,
}

const InputLayoutContext = createContext<InputLayoutContextValues>({
  isValid: false,
  isError: false,
})
export default InputLayoutContext