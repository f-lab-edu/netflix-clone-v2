import type { ReactNode } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs'
import { Suspense, useCallback } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

interface SuspenseErrorBoundaryProps {
  errorFallback: (_props: FallbackProps) => ReactNode
  loadingFallback: ReactNode
  children: ReactNode
}

export default function SuspenseErrorBoundary({ errorFallback, loadingFallback, children }: SuspenseErrorBoundaryProps) {
  const errorAction = useCallback((e: Error) => {
    Sentry.captureException(e)
  }, [])
  return <ErrorBoundary fallbackRender={errorFallback} onError={errorAction}>
    <Suspense fallback={loadingFallback}>
      {children}
    </Suspense>
  </ErrorBoundary>
}
