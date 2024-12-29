import type { FocusEventHandler, Ref } from 'react'
import { useId, useMemo, useState } from 'react'
import ErrorCross from '@/assets/netflix/error-cross.svg'
import useLazyValue from './hooks/useLazyValue'
import { InputAreaShell, InputDivCss, InputErrorDiv, InputErrorState, InputLabelDefault, InputLabelHasValueOrFocused, InputOutline, InputTagDefault } from './style/InputStyle'

interface InputProps {
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onChange?: (_value: string) => void
  value: string
  errorMessage?: string
  label: string
  ref?: Ref<HTMLInputElement>
}

export default function TextInput({ onFocus, onBlur, onChange, label, value: incomeValue, errorMessage, ref }: InputProps) {
  const inputId = useId()
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useLazyValue<string>(incomeValue, onChange)
  const hasValue = useMemo(() => Boolean(value), [value])
  const hasError = useMemo(() => Boolean(errorMessage), [errorMessage])
  const errorDisplay = useMemo(() => {
    return hasError && [
      <ErrorCross css={{
        marginRight: '0.25rem',
        top: '.1872rem',
        position: 'relative'
      }} key={'error-cross'} />,
      errorMessage
    ]
  }, [hasError, errorMessage])
  const styleComputed = useMemo(() => {
    const layout = [InputDivCss]
    const input = [InputTagDefault]
    const label = [InputLabelDefault]
    const error = [InputErrorDiv]
    if (focus || hasValue) {
      label.push(InputLabelHasValueOrFocused)
    }
    if (hasError) {
      layout.push(InputErrorState)
    }
    return {
      layout,
      label,
      input,
      error
    }
  }, [hasValue, focus, hasError])
  return <div css={styleComputed.layout}>
    <label
      css={styleComputed.label}
      htmlFor={inputId}
    >
      {label}
    </label>
    <div css={InputAreaShell}>
      <input
        css={styleComputed.input}
        ref={ref}
        id={inputId}
        value={value || ''}
        onFocus={(e) => {
          setFocus(true)
          if (onFocus) onFocus(e)
        }}
        onBlur={(e) => {
          setFocus(false)
          if (onBlur) onBlur(e)
        }}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <div css={InputOutline}></div>
    </div>
    <div css={styleComputed.error}>{errorDisplay}</div>
  </div>
}