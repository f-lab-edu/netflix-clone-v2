import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react'

type onChangeHandler<T> = (_v: T) => void

export default function useLazyValue<T>(defaultValue: T, incomeValue?: T, onChange?: onChangeHandler<T>): [
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>
] {
  const lazyValue = useRef<T>(defaultValue)
  const [value, setValue] = useState<T>()

  useEffect(() => {
    if (value === lazyValue.current) return
    if (onChange && value) {
      onChange(lazyValue.current = value)
    }
  }, [value, onChange])
  useEffect(() => {
    if (incomeValue === lazyValue.current) return
    if (incomeValue) {
      setValue(lazyValue.current = incomeValue)
    }
  }, [incomeValue])
  return [
    value, setValue
  ]
}