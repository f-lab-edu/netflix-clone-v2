import type { InputLayoutProps } from './InputLayout';
import type { SelectHTMLAttributes } from 'react';
import { useId, useMemo } from 'react';
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
  const hasValue = useMemo(() => Boolean(props.value), [props.value])

  return <InputLayout
    {...inputLayoutProps}
    inputType='select'
    postfixChild={postfixChild ?? <SelectArrow />}
    isFocus={isFocus}
    labelId={inputId}
    hasValue={hasValue}
  >
    {(throwedCss) => <select {...props} {...focusEvents} css={[throwedCss, css]}>
      {children}
    </select>
    }
  </InputLayout>
}