import type { SyncStringStorage } from 'jotai/vanilla/utils/atomWithStorage';
import { createJSONStorage } from 'jotai/utils';

const isServer = typeof window === 'undefined'

const CoveredStorageGenerate = (storage: Storage | null): SyncStringStorage => ({
  getItem: (key) => {
    if (!storage) return ''
    return storage.getItem(key)
  },
  setItem(key, newValue) {
    if (!storage) return
    storage.setItem(key, newValue)
  },
  removeItem(key) {
    if (!storage) return
    storage.removeItem(key)
  },
  subscribe(key, callback) {
    if (!storage) return () => { }
    const windowEventListener = (e: StorageEvent) => {
      if (e.storageArea === storage && e.key === key) {
        callback(storage.getItem(key))
      }
    }
    window.addEventListener('storage', windowEventListener)
    return () => {
      window.removeEventListener('storage', windowEventListener)
    }
  }
})

export const CoveredLocalStorage: SyncStringStorage = CoveredStorageGenerate(isServer ? null : localStorage)
export const CoveredSessionStorage: SyncStringStorage = CoveredStorageGenerate(isServer ? null : sessionStorage)

export const JotaiLocalStorage = createJSONStorage<string>(() => CoveredLocalStorage)
export const JotaiSessionStorage = createJSONStorage<string>(() => CoveredSessionStorage)