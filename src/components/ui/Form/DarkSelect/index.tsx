import type { InputLayoutContextValues } from '../InputLayout/InputLayoutContext';
import type { ReactNode, SelectHTMLAttributes } from 'react';
import { useMemo } from 'react';
import SelectArrow from '@assets/netflix/select-arrow.svg'
import ConditionalRender from '../../utils/ConditionalRender';
import { InputErrorStateCss, InputValidatedStateCss } from '../DarkTextInput/style';
import InputLayout from '../InputLayout';
import { inputCss, layoutCss, outlineCss, postfixCss, prefixCss, shellCss } from './style';
type DarkLanguageSelectProps = {
  children?: ReactNode
  prefix?: ReactNode
  postfix?: ReactNode
  prefixSize?: string
  postfixSize?: string
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'prefix'> & InputLayoutContextValues

export default function DarkSelect({ children, postfix, postfixSize, prefix, prefixSize, isValid, error, ...props }: DarkLanguageSelectProps) {
  const selectPadding = useMemo(() => {
    const left = ['var(--left-space)']
    const right = ['var(--right-space)']
    if (prefixSize) left.push(prefixSize, '0.5rem')
    if (postfixSize) right.push(postfixSize, '0.5rem')
    return {
      paddingRight: `calc(${right.join(' + ')})`,
      paddingLeft: `calc(${left.join(' + ')})`
    }
  }, [prefixSize, postfixSize])
  const outlineStyle = useMemo(() => {
    const temp = []
    if (isValid) temp.push(InputValidatedStateCss)
    if (error) temp.push(InputErrorStateCss)
    return temp
  }, [isValid, error])

  return <InputLayout css={[layoutCss, outlineStyle]}>
    <InputLayout.Shell css={shellCss}>
      <ConditionalRender.Boolean
        condition={Boolean(prefix)}
        render={{
          true: <InputLayout.Prefix css={prefixCss}>
            {prefix}
          </InputLayout.Prefix>
        }}
      />
      <InputLayout.Tag>
        <select {...props} css={[inputCss, selectPadding]}>
          {children}
        </select>
      </InputLayout.Tag>
      <InputLayout.Postfix css={postfixCss}>
        {postfix}
        <SelectArrow />
      </InputLayout.Postfix>
      <InputLayout.Outline css={outlineCss} />
    </InputLayout.Shell>
  </InputLayout>
}