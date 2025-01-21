import type { SyncStringStorage } from 'jotai/vanilla/utils/atomWithStorage';
import { createJSONStorage } from 'jotai/utils';

const isBrowser = typeof window === 'undefined'

export const CoveredLocalStorage: SyncStringStorage = {
  getItem: (key) => {
    if (isBrowser) return ''
    return localStorage.getItem(key)
  },
  setItem(key, newValue) {
    if (isBrowser) return
    localStorage.setItem(key, newValue)
  },
  removeItem(key) {
    if (isBrowser) return
    localStorage.removeItem(key)
  },
  subscribe(key, callback) {
    if (isBrowser) return () => { }
    const windowEventListener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        callback(localStorage.getItem(key))
      }
    }
    window.addEventListener('storage', windowEventListener)
    return () => {
      window.removeEventListener('storage', windowEventListener)
    }
  }
}

export const JotaiLocalStorage = createJSONStorage<string>(() => CoveredLocalStorage)