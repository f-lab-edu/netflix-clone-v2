import type { InputLayoutProps } from './InputLayout';
import type { SelectHTMLAttributes } from 'react';
import { useId } from 'react';
import SelectArrow from '@assets/netflix/select-arrow.svg'
import InputLayout from './InputLayout';

interface SelectProps extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children'>
}

export default function Select({
  inputLayoutProps,
  children,
  css,
  ...props
}: SelectProps & SelectHTMLAttributes<HTMLSelectElement> & CssProps) {
  const { postfixChild } = inputLayoutProps || {}
  const inputId = useId()

  return <InputLayout
    {...inputLayoutProps}
    inputType='select'
    postfixChild={postfixChild ?? <SelectArrow />}
    labelId={inputId}
  >
    {(throwedCss) => <select {...props} id={inputId} css={[throwedCss, css]}>
      {children}
    </select>
    }
  </InputLayout>
}