import type { Interpolation } from '@emotion/react';
import type { ChangeEvent, ChangeEventHandler, FocusEvent, FocusEventHandler, ReactElement, Ref } from 'react'
import { useCallback, useId, useMemo, useState } from 'react'
import ErrorCross from '@/assets/netflix/error-cross.svg'
import useLazyValue from './hooks/useLazyValue'
import { InputAreaShellCss, InputDivCss, InputErrorDivCss, InputErrorStateCss, InputLabelDefaultCss, InputLabelFromTextCss, InputLabelHasValueOrFocusedCss, InputOutlineCss, InputTagDefaultCss, InputTagFromTextCss } from './style/InputStyle'
import { InputLabelFromSelectCss, InputTagFromSelectCss, SelectArrowPositionCss, SelectOutlineCss } from './style/SelectStyle'
type PosibleInputType = HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement

interface ChildrenProps<V, E extends Element = Element> {
  ref?: Ref<E>
  css?: Interpolation | Interpolation[]
  id: string
  name?: string
  defaultValue?: V
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onChange?: ChangeEventHandler
}

interface InputProps<V, E extends Element = Element> {
  value?: V
  prefixChild?: ReactElement
  postfixChild?: ReactElement
  children: (_props: ChildrenProps<V, E>) => ReactElement
  inputType?: 'select' | 'text' | 'file' | 'textarea' | 'checkbox' | 'radio'
  errorMessage?: string
  label?: string
  onChangeValue?: (_value: V | undefined) => void
}

export type InputLayoutProps<V, E extends Element = Element> = InputProps<V, E> & Omit<ChildrenProps<V, E>, 'id'>

export default function InputLayout<V, E extends Element = Element>(props: InputLayoutProps<V, E>) {
  const {
    value: incomeValue,
    onChangeValue,
    errorMessage,
    onFocus,
    onBlur,
    onChange,
    inputType,
    css,
    label,
    prefixChild,
    postfixChild,
    children,
    ...childProps
  } = props
  const inputId = useId()
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useLazyValue<V>(props.defaultValue, incomeValue, onChangeValue)
  const hasValue = useMemo(() => Boolean(value), [value])
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
      default:
        input.push(InputTagFromTextCss)
        label.push(InputLabelFromTextCss)
        break
    }
    if (focus || hasValue) {
      label.push(InputLabelHasValueOrFocusedCss)
    }
    if (hasError) {
      layout.push(InputErrorStateCss)
      error.push(InputErrorDivCss)
    }
    return {
      layout,
      label,
      inputShell,
      input,
      error,
      outline
    }
  }, [hasValue, focus, hasError, inputType])

  const childrenProps: ChildrenProps<V, E> = {
    ...childProps,
    id: inputId,
    css: styleComputed.input,
    onFocus: useCallback((e: FocusEvent) => {
      setFocus(true)
      if (onFocus) onFocus(e)
    }, [onFocus]),
    onBlur: useCallback((e: FocusEvent) => {
      setFocus(false)
      if (onBlur) onBlur(e)
    }, [onBlur]),
    onChange: useCallback((e: ChangeEvent<PosibleInputType>) => {
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