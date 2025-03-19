import type { RefCallback } from 'react';
import { useCallback, useState } from 'react'

export default function useCallbackRef<T>(obj: T): [T, RefCallback<T>] {
  const [rootRef, setRootRef] = useState<T>(obj)
  const callbackRef = useCallback<RefCallback<T>>((el: T) => {
    setRootRef(el)
  }, [])
  return [rootRef, callbackRef]
}
