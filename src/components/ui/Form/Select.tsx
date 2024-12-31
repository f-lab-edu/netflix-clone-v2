import type { InputLayoutProps } from './InputLayout';
import type { Interpolation } from '@emotion/react';
import SelectArrow from '@assets/netflix/select-arrow.svg'
import InputLayout from './InputLayout';
import useInputHelper from './hooks/useInputHelper';

interface CssProps {
  css?: Interpolation
}

type InputType = string | undefined
interface SelectProps extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children'>
  onChangeValue?: (_value: InputType) => void
}

type OmitedSelectValue = Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'defaultValue' | 'value'> & {
  defaultValue?: InputType
  value?: InputType
}

export default function Select({
  inputLayoutProps,
  children,
  defaultValue,
  value,
  onBlur,
  onFocus,
  onChange,
  onChangeValue,
  css,
  ...props
}: SelectProps & OmitedSelectValue & CssProps) {
  const { postfixChild } = inputLayoutProps || {}
  const { layoutProps, ...inputProps } = useInputHelper<InputType>({
    defaultValue,
    value,
    onBlur,
    onFocus,
    onChange,
    onChangeValue,
  })

  return <InputLayout
    {...inputLayoutProps}
    inputType='select'
    postfixChild={postfixChild ?? <SelectArrow />}
    {...layoutProps}
  >
    {(throwedCss) => <select {...props} {...inputProps} css={[throwedCss, css]}>
      {children}
    </select>
    }
  </InputLayout>
}