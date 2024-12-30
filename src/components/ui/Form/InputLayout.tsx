import type { Interpolation } from '@emotion/react';
import type { ChangeEvent, ChangeEventHandler, FocusEvent, FocusEventHandler, ReactElement } from 'react'
import { useCallback, useId, useMemo, useState } from 'react'
import ErrorCross from '@/assets/netflix/error-cross.svg'
import useLazyValue from './hooks/useLazyValue'
import { InputAreaShellCss, InputDivCss, InputErrorDivCss, InputErrorStateCss, InputLabelDefaultCss, InputLabelFromTextCss, InputLabelHasValueOrFocusedCss, InputOutlineCss, InputTagDefaultCss, InputTagFromTextCss } from './style/InputStyle'
import { InputLabelFromSelectCss, InputTagFromSelectCss, SelectArrowPositionCss, SelectOutlineCss } from './style/SelectStyle'
type PosibleInputType = HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement

interface ChildrenProps<V> {
  css: Interpolation[]
  id: string
  value: V | undefined
  // defaultValue: V
  onFocus: FocusEventHandler
  onBlur: FocusEventHandler
  onChange: ChangeEventHandler
}

export interface InputProps<V> {
  css?: Interpolation
  inputCss?: Interpolation
  value: V
  defaultValue: V
  prefixChild?: ReactElement
  postfixChild?: ReactElement
  children: (_props: ChildrenProps<V>) => ReactElement
  isSelect?: boolean
  errorMessage?: string
  label?: string
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onChange?: ChangeEventHandler
  onChangeValue?: (_value: V | undefined) => void
}

export default function InputLayout<V>({
  css,
  inputCss,
  onFocus,
  onBlur,
  onChange,
  onChangeValue,
  label,
  value: incomeValue,
  errorMessage,
  prefixChild,
  children,
  postfixChild,
  defaultValue,
  isSelect
}: InputProps<V>) {
  const inputId = useId()
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useLazyValue<V>(defaultValue, incomeValue, onChangeValue)
  const hasValue = useMemo(() => Boolean(value), [value])
  const hasError = useMemo(() => Boolean(errorMessage), [errorMessage])
  const styleComputed = useMemo(() => {
    const layout: Interpolation[] = [InputDivCss]
    const inputShell: Interpolation[] = [InputAreaShellCss]
    const input: Interpolation[] = [InputTagDefaultCss]
    const label: Interpolation[] = [InputLabelDefaultCss]
    const error: Interpolation[] = []
    const outline: Interpolation[] = [InputOutlineCss]
    if (isSelect) {
      input.push(InputTagFromSelectCss)
      label.push(InputLabelFromSelectCss)
      outline.push(SelectArrowPositionCss, SelectOutlineCss)
    } else {
      input.push(InputTagFromTextCss)
      label.push(InputLabelFromTextCss)
    }
    if (focus || hasValue) {
      label.push(InputLabelHasValueOrFocusedCss)
    }
    if (hasError) {
      layout.push(InputErrorStateCss)
      error.push(InputErrorDivCss)
    }
    if (inputCss) {
      input.push(inputCss)
    }
    return {
      layout,
      label,
      inputShell,
      input,
      error,
      outline
    }
  }, [hasValue, focus, hasError, isSelect, inputCss])

  const onFocusEvent = useCallback((e: FocusEvent) => {
    setFocus(true)
    if (onFocus) onFocus(e)
  }, [onFocus])
  const onBlurEvent = useCallback((e: FocusEvent) => {
    setFocus(false)
    if (onBlur) onBlur(e)
  }, [onBlur])
  const onChangeEvent = useCallback((e: ChangeEvent<PosibleInputType>) => {
    if (e.target.tagName === 'input' && e.target.type === 'file') {
      setValue((prev) => {
        if (Array.isArray(prev)) {
          const input = e.target as HTMLInputElement
          if (input.files) {
            const fileList = [...prev] as V & File[]
            for (let i = 0; i < input.files.length; i++) {
              const file = input.files.item(i)
              if (file) {
                fileList.push(file)
              }
            }
            return fileList
          }
        }
        return prev
      })
    } else {
      setValue(e.target.value as V)
    }
    if (onChange) onChange(e)
  }, [setValue, onChange])
  const childrenProps = {
    id: inputId,
    css: styleComputed.input,
    value: value,
    // defaultValue: defaultValue,
    onFocus: onFocusEvent,
    onBlur: onBlurEvent,
    onChange: onChangeEvent
  }
  return <div css={[styleComputed.layout, css]}>
    <label
      css={styleComputed.label}
      htmlFor={inputId}
    >
      {label}
    </label>
    <div css={styleComputed.inputShell}>
      {prefixChild}
      {children(childrenProps)}
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