import type { FocusEventHandler } from 'react';
import { useCallback, useState } from 'react'

export default function useIsFocus(
  onFocus?: FocusEventHandler,
  onBlur?: FocusEventHandler
) {
  const [isFocus, setFocus] = useState(false)

  const onFocusEvent = useCallback<FocusEventHandler>((e) => {
    setFocus(true)
    if (onFocus) onFocus(e)
  }, [onFocus])
  const onBlurEvent = useCallback<FocusEventHandler>((e) => {
    setFocus(false)
    if (onBlur) onBlur(e)
  }, [onBlur])
  return {
    isFocus,
    onFocus: onFocusEvent,
    onBlur: onBlurEvent
  }
}