import type { SyncStringStorage } from 'jotai/vanilla/utils/atomWithStorage';
import { createJSONStorage } from 'jotai/utils';

const isBrowser = typeof window !== 'undefined'
const serverObj: { [k: string]: string } = {}

export const CoveredLocalStorage: SyncStringStorage = {
  getItem: (key) => {
    if (isBrowser) {
      return localStorage.getItem(key)
    } else {
      return serverObj[key]
    }
  },
  setItem(key, newValue) {
    if (isBrowser) {
      localStorage.setItem(key, newValue)
    } else {
      serverObj[key] = newValue
    }
  },
  removeItem(key) {
    if (isBrowser) {
      return localStorage.removeItem(key)
    } else {
      return serverObj[key]
    }
  },
  subscribe(key, callback) {
    if (!isBrowser) return () => { }
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