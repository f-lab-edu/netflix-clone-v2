import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function useGoHomeWithDelay(delayMs: number) {
  const router = useRouter()
  useEffect(() => {
    const goHomeTimeout = setTimeout(() => {
      router.push('/')
    }, delayMs)
    return () => {
      clearTimeout(goHomeTimeout)
    }
  })
}
