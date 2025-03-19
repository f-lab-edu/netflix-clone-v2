import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react'

type onChangeHandler<T> = (_v: T | undefined) => void

export default function useLazyValue<T>(defaultValue?: T, incomeValue?: T, onChange?: onChangeHandler<T>): [
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>
] {
  const lazyValue = useRef<T>(defaultValue)
  const [value, setValue] = useState<T | undefined>(defaultValue)

  useEffect(() => {
    if (value === lazyValue.current) return
    if (onChange && typeof value !== 'undefined') {
      onChange(lazyValue.current = value)
    }
  }, [value, onChange])
  useEffect(() => {
    if (incomeValue === lazyValue.current) return
    if (typeof incomeValue !== 'undefined') {
      setValue(lazyValue.current = incomeValue)
    }
  }, [incomeValue])
  return [
    value, setValue
  ]
}
