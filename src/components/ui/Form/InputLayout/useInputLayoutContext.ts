import { useContext } from 'react';
import InputLayoutContext from './InputLayoutContext';

export default function useInputLayout() {
  const context = useContext(InputLayoutContext) || {}
  return context
}