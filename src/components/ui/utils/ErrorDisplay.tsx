import type { ReactNode } from 'react';
import * as Sentry from '@sentry/nextjs'
import { Component } from 'react';

type ErrorDisplayProps = {
  children: ReactNode
}

type ErrorDisplayState = {
  errorMsg: string
}

class ErrorDisplay extends Component<ErrorDisplayProps, ErrorDisplayState> {
  constructor(props: ErrorDisplayProps) {
    super(props)
    this.state = {
      errorMsg: ''
    }
  }

  public componentDidCatch(error: Error): void {
    // TODO: logging on service
    Sentry.captureException(error)
  }

  static getDerivedStateFromError(error: Error) {
    try {
      const json = JSON.parse(error.message)
      return {
        errorMsg: json.message
      }
    } catch {
      return {
        errorMsg: error.message
      }
    }
  }

  render() {
    return <div>
      {this.state.errorMsg ? <div css={[]}>{this.state.errorMsg}</div> : undefined}
      {this.props.children}
    </div>
  }
}

export default ErrorDisplay