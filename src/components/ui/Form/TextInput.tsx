import type { InputProps } from './InputLayout';
import InputLayout from './InputLayout'

export default function TextInput(props: Omit<InputProps<string> & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value'>, 'children' | 'defaultValue'>) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { onFocus, onBlur, value, errorMessage, label, ref, ...inputProps } = props
  return <InputLayout<string> {...props} defaultValue=''>
    {(childProps) => {
      return <input
        {...inputProps}
        {...childProps}
      />
    }}
  </InputLayout>
}