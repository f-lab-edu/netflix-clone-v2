import type { InputProps } from './InputLayout';
import SelectArrow from '@assets/netflix/select-arrow.svg'
import InputLayout from './InputLayout';

export default function Select(
  props: Omit<InputProps<string>, 'children'> & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { onFocus, onBlur, errorMessage, children, inputCss, prefixChild, isSelect, defaultValue, onChangeValue, ...inputProps } = props
  return <InputLayout<string>
    {...props}
    isSelect
    defaultValue={defaultValue}
    postfixChild={props.postfixChild ?? <SelectArrow />}
  >
    {(childProps) => <select {...inputProps}{...childProps}>
      {children}
    </select>}
  </InputLayout>
}