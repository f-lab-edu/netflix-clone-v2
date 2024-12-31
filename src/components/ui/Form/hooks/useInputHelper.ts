import type { ChangeEvent, ChangeEventHandler, FocusEventHandler } from 'react';
import { useCallback, useId, useMemo, useState } from 'react';
import useLazyValue from './useLazyValue'

type PosibleInputType = HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement

export interface InputHelperProps<V> {
  value?: V
  defaultValue?: V
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onChange?: ChangeEventHandler
  onChangeValue?: (_value: V | undefined) => void
}
export default function useInputHelper<V>({
  defaultValue,
  value: incomeValue,
  onFocus,
  onBlur,
  onChange,
  onChangeValue
}: InputHelperProps<V>) {
  const inputId = useId()
  const [isFocus, setFocus] = useState(false)

  const [value, setValue] = useLazyValue<V>(defaultValue, incomeValue, onChangeValue)
  const hasValue = useMemo(() => Boolean(value), [value])
  const onFocusEvent = useCallback<FocusEventHandler>((e) => {
    setFocus(true)
    if (onFocus) onFocus(e)
  }, [onFocus])
  const onBlurEvent = useCallback<FocusEventHandler>((e) => {
    setFocus(false)
    if (onBlur) onBlur(e)
  }, [onBlur])
  const onChangeEvent = useCallback<ChangeEventHandler>((e: ChangeEvent<PosibleInputType>) => {
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
  return {
    defaultValue,
    layoutProps: {
      labelId: inputId,
      isFocus,
      hasValue
    },
    onFocus: onFocusEvent,
    onBlur: onBlurEvent,
    onChange: onChangeEvent
  }
}