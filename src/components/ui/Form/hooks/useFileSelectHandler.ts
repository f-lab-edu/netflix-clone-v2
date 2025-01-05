import type { ChangeEventHandler } from 'react';
import { useCallback } from 'react';
import useLazyValue from './useLazyValue';

export default function useFileSelectHandler(incomeValue: File[], onChangeFile: (_value: File[] | undefined) => void, onChange?: ChangeEventHandler) {
  const [value, setValue] = useLazyValue<File[]>([], incomeValue, onChangeFile)
  const onChangeEvent = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setValue((prev) => {
      if (Array.isArray(prev)) {
        const input = e.target as HTMLInputElement
        if (input.files) {
          const fileList = [...prev] as File[]
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
    if (onChange) onChange(e)
  }, [setValue, onChange])
  return {
    value,
    onChangeEvent
  }
}