async function initMSW() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    server.listen()
  } else {
    const { worker } = await import('./browser')
    worker.start({
      onUnhandledRequest(req, print) {
        if (!req.url.startsWith('/api/')) {
          return
        }

        print.warning()
      }
    })
  }
}

export default initMSW