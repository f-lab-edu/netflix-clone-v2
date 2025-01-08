import { createContext } from 'react'

export interface InputLayoutContextValues {
  isValid?: boolean,
  error?: string,
}

const InputLayoutContext = createContext<InputLayoutContextValues>({
  isValid: false,
  error: '',
})
export default InputLayoutContext