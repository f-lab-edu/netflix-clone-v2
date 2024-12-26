import type { SyntheticEvent } from 'react';
import { useDeferredValue, useEffect, useRef, useState } from 'react'

type PromiseResolver = (_value: boolean | PromiseLike<boolean>) => void

export default function useAnimationControl() {
  const [eventState, setEventState] = useState(false)
  const [prevState, setPrevState] = useState(false)
  const promiseList = useRef(new Map<string, PromiseResolver>())
  const [registedObj, setRegistedObj] = useState<Promise<boolean>[]>([])
  const eventBusList = useDeferredValue(registedObj)

  useEffect(() => {
    if (eventBusList.length === 0) return
    Promise.all(eventBusList).then(() => {
      setEventState(prevState)
      setRegistedObj([])
    }).finally(() => {
      promiseList.current = new Map<string, PromiseResolver>()
    })
  }, [eventBusList, prevState])

  function register() {
    const startFunction = (e: SyntheticEvent<HTMLElement>) => {
      const id = `_${promiseList.current.size}`
      const animationEndFunction = () => {
        const resolver = promiseList.current.get(id)
        if (resolver) resolver(true)
        e.target.removeEventListener('transitionend', animationEndFunction)
        e.target.removeEventListener('transitioncancel', animationEndFunction)
        e.target.removeEventListener('animationend', animationEndFunction)
      }
      e.target.addEventListener('transitionend', animationEndFunction, { once: true })
      e.target.addEventListener('transitioncancel', animationEndFunction, { once: true })
      e.target.addEventListener('animationend', animationEndFunction, { once: true })
      setRegistedObj((prev) => [...prev, new Promise<boolean>((resolve) => {
        promiseList.current.set(id, resolve)
      })])
    }
    return {
      onTransitionStart: startFunction,
      onAnimationStart: startFunction,
    }
  }

  function toggleEventState(e?: SyntheticEvent) {
    e?.preventDefault()
    setPrevState(!eventState)
  }
  return {
    toggleEventState,
    register,
    prevState,
    eventState
  }
}