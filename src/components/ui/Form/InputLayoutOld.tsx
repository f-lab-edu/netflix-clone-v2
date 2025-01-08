import type { Interpolation } from '@emotion/react';
import type { ReactElement } from 'react'
import { useMemo } from 'react'
import ErrorCross from '@/assets/netflix/error-cross.svg'
import { InputAreaShellCss, InputDefaultStateCss, InputDivCss, InputErrorDivCss, InputErrorStateCss, InputLabelDefaultCss, InputLabelFromTextCss, InputOutlineCss, InputTagDefaultCss, InputTagFromTextCss, InputValidatedStateCss } from './style/InputStyle'
import { InputAreaShellWithContentLabelCss, RadioLabelStyle, RadioOutLineWithContentLabelStyle, RadioTagContentLabelCss, RadioTagDefaultCss } from './style/RadioStyle';
import { InputLabelFromSelectCss, InputTagFromSelectCss, SelectArrowPositionCss, SelectOutlineCss } from './style/SelectStyle'

export interface InputLayoutProps {
  className?: string
  css?: Interpolation | Interpolation[]
  labelId?: string
  prefixChild?: ReactElement
  postfixChild?: ReactElement
  children: (_css: Interpolation | Interpolation[]) => ReactElement
  inputType?: 'select' | 'text' | 'file' | 'textarea' | 'checkbox' | 'radio'
  isValid?: boolean
  errorMessage?: string
  label?: string | ReactElement
}

export default function InputLayout({
  className,
  css,
  isValid,
  errorMessage,
  inputType,
  labelId,
  label,
  prefixChild,
  postfixChild,
  children,
}: InputLayoutProps) {
  const hasError = useMemo(() => Boolean(errorMessage), [errorMessage])
  const styleComputed = useMemo(() => {
    const layout: Interpolation[] = [InputDivCss]
    const inputShell: Interpolation[] = [InputAreaShellCss]
    const input: Interpolation[] = [InputTagDefaultCss]
    const label: Interpolation[] = [InputLabelDefaultCss]
    const error: Interpolation[] = []
    const outline: Interpolation[] = [InputOutlineCss]
    switch (inputType) {
      case 'select':
        input.push(InputTagFromSelectCss)
        label.push(InputLabelFromSelectCss)
        outline.push(SelectArrowPositionCss, SelectOutlineCss)
        break
      case 'radio':
        if (typeof label === 'string') {
          input.push(RadioTagDefaultCss)
        } else {
          inputShell.push(InputAreaShellWithContentLabelCss)
          input.push(RadioTagContentLabelCss)
          label.push(RadioLabelStyle)
          outline.push(RadioOutLineWithContentLabelStyle)
        }
      default:
        input.push(InputTagFromTextCss)
        label.push(InputLabelFromTextCss)
        break
    }
    if (hasError) {
      layout.push(InputErrorStateCss)
      error.push(InputErrorDivCss)
    } else if (isValid) {
      layout.push(InputValidatedStateCss)
    } else {
      layout.push(InputDefaultStateCss)
    }
    return {
      layout,
      label,
      inputShell,
      input,
      error,
      outline
    }
  }, [hasError, inputType, isValid])

  return <div css={[styleComputed.layout, css]} className={className}>
    <div css={styleComputed.inputShell}>
      {prefixChild}
      {children(styleComputed.input)}
      <label
        css={styleComputed.label}
        htmlFor={labelId}
      >
        {label}
      </label>
      <div css={styleComputed.outline}>
        {postfixChild}
      </div>
    </div>
    <div css={styleComputed.error}>{
      hasError && [
        <ErrorCross css={{
          marginRight: '0.25rem',
          top: '.1872rem',
          position: 'relative'
        }} key={'error-cross'} />,
        errorMessage
      ]
    }</div>
  </div>
}