import type { InputLayoutProps } from './InputLayout';
import type { Interpolation } from '@emotion/react';
import type { ReactNode } from 'react';
import SelectArrow from '@assets/netflix/select-arrow.svg'
import InputLayout from './InputLayout';

interface CssProps {
  css?: Interpolation
}
interface SelectProps extends CssProps {
  inputProps?: Omit<InputLayoutProps<string, HTMLSelectElement>, 'children' | 'css'>
  elementProps?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & CssProps
  children?: ReactNode
}

export default function Select({ inputProps, css, elementProps, children }: SelectProps) {
  const { defaultValue, postfixChild } = inputProps || {}
  return <InputLayout<string, HTMLSelectElement>
    {...inputProps}
    defaultValue={defaultValue || ''}
    css={css}
    inputType='select'
    postfixChild={postfixChild ?? <SelectArrow />}
  >
    {(childProps) => {
      const { css: childCss, ...throwProps } = childProps
      const { css: elementCss, ...filteredElementProps } = elementProps || {}
      return <select {...filteredElementProps}{...throwProps} css={[childCss, elementCss]}>
        {children}
      </select>
    }}
  </InputLayout>
}