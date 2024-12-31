import type { InputLayoutProps } from './InputLayout';
import type { Interpolation } from '@emotion/react';
import InputLayout from './InputLayout'
interface CssProps {
  css?: Interpolation
}
interface TextInputProps extends CssProps {
  inputProps?: Omit<InputLayoutProps<string, HTMLInputElement>, 'children' | 'css'>
  elementProps?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLInputElement>, HTMLInputElement> & CssProps
  css?: Interpolation
}

export default function TextInput({ inputProps, elementProps, css }: TextInputProps) {

  return <InputLayout<string, HTMLInputElement> defaultValue='' {...inputProps} css={css}>
    {(childProps) => {
      const { css: childCss, ...throwProps } = childProps
      const { css: elementCss, ...filteredElementProps } = elementProps || {}
      return <input {...filteredElementProps}{...throwProps} css={[childCss, elementCss]} />
    }}
  </InputLayout>
}