import type { ReactNode } from 'react';
import SuspenseErrorBoundary from './SuspenseErrorBoundary';

type ErrorDisplayProps = {
  children: ReactNode
}

export default function ErrorDisplay({ children }: ErrorDisplayProps) {
  return <SuspenseErrorBoundary
    loadingFallback={children}
    errorFallback={({ error }) => {
      let message
      if (error instanceof Error) {
        try {
          const json = JSON.parse(error.message)
          message = json.message
        } catch {
          message = error.message
        }
      }
      return <>
        <div>{message}</div>
        {children}
      </>
    }}
  >
    {children}
  </SuspenseErrorBoundary>
}
