import { useCallback, useMemo, useState } from 'react';

export default function useAllCheckedValue<T extends object>(
  defaultObj: T | undefined,
  objectKeys: (keyof T)[]
) {
  const [valueObj, setValueObj] = useState(defaultObj)
  const onChangeAll = useCallback((value: boolean) => {
    const obj = Object.create(null)
    objectKeys.forEach((k) => {
      obj[k] = value
    })
    setValueObj(obj)
  }, [objectKeys])
  const onChangeSingle = useCallback((name: keyof T, value: T[keyof T]) => {
    setValueObj((prev) => {
      const obj = Object.assign({}, prev)
      obj[name] = value
      return obj
    })
  }, [])
  const isCheckedAll = useMemo(() => {
    return Object.values(valueObj || {}).filter(v => v).length === objectKeys.length
  }, [valueObj, objectKeys])
  return {
    isCheckedAll,
    onChangeSingle,
    onChangeAll
  }
}