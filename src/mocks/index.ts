import type { SharedOptions } from 'msw';

export const sharedMswOptions: SharedOptions = {
  onUnhandledRequest: (req, print) => {
    if (!req.url.startsWith('/api/')) {
      return
    }
    print.warning()
  }
}

async function initMSW() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    server.listen(sharedMswOptions)
  } else {
    const { worker } = await import('./browser')
    const result = await worker.start({ ...sharedMswOptions, quiet: true })
    return result ? true : false
  }
}

export default initMSW
