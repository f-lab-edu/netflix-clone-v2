import type { InputLayoutProps } from './InputLayout';
import type { SelectHTMLAttributes } from 'react';
import { useId } from 'react';
import SelectArrow from '@assets/netflix/select-arrow.svg'
import InputLayout from './InputLayout';
import useIsFocus from './hooks/useIsFocus';

interface SelectProps extends CssProps {
  inputLayoutProps?: Omit<InputLayoutProps, 'children'>
}

export default function Select({
  inputLayoutProps,
  children,
  onBlur,
  onFocus,
  css,
  ...props
}: SelectProps & SelectHTMLAttributes<HTMLSelectElement> & CssProps) {
  const { postfixChild } = inputLayoutProps || {}
  const inputId = useId()
  const { isFocus, ...focusEvents } = useIsFocus(onFocus, onBlur)

  return <InputLayout
    {...inputLayoutProps}
    inputType='select'
    postfixChild={postfixChild ?? <SelectArrow />}
    isFocus={isFocus}
    labelId={inputId}
  >
    {(throwedCss) => <select {...props} {...focusEvents} id={inputId} css={[throwedCss, css]}>
      {children}
    </select>
    }
  </InputLayout>
}