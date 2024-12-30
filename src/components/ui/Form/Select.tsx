import type { InputProps } from './InputLayout';
import SelectArrow from '@assets/netflix/select-arrow.svg'
import InputLayout from './InputLayout';

export default function Select(
  props: Omit<InputProps<string>, 'children' | 'label'> & Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'value' | 'onChange'>
) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { onFocus, onBlur, onChange, errorMessage, children, inputCss, prefixChild, isSelect, ...inputProps } = props
  return <InputLayout<string>
    {...props}
    isSelect
    postfixChild={props.postfixChild ?? <SelectArrow />}
  >
    {(childProps) => <select {...inputProps}{...childProps}>
      {children}
    </select>}
  </InputLayout>
}