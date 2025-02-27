export type IntersectionCallback = (_v: IntersectionObserverEntry) => void

const observerActions = new WeakMap<Element, IntersectionCallback>()

let observer: IntersectionObserver

const getObserver = (): IntersectionObserver => {
  if (!observer) {
    observer = new IntersectionObserver((callback) => {
      callback.forEach(v => {
        const callback = observerActions.get(v.target)
        if (callback) callback(v)
      })
    })
  }
  return observer
}

export const observe = (el: Element, callback: IntersectionCallback) => {
  observerActions.set(
    el,
    callback
  )
  getObserver().observe(el)
}

export const unobserve = (el: Element) => {
  getObserver().unobserve(el)
}