import type { InputProps } from './InputLayout';
import InputLayout from './InputLayout'

export default function TextInput(props: Omit<InputProps<string>, 'children'> & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'children'>) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { onFocus, onBlur, onChange, value, errorMessage, label, ref, ...inputProps } = props
  return <InputLayout<string> {...props}>
    {(childProps) => <>
      <input
        {...inputProps}
        {...childProps}
      />
    </>}
  </InputLayout>
}