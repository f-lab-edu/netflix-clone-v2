import type { ReactNode } from 'react';
import { useEffect, useState } from 'react'
import ConditionalRender from './ConditionalRender'

interface ClientOnlyProps {
  children: ReactNode
}

export default function ClientOnly({ children }: ClientOnlyProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return <ConditionalRender.Boolean
    condition={isClient}
    render={{
      true: children
    }}
  />
}
