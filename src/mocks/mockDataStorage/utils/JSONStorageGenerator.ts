export default function JSONStorageGenerator<T extends object = object>(isServer: boolean, storeKeyName: string) {
  const loadDataFromStorage = (): T => {
    if (isServer) return {} as T
    const savedData = localStorage.getItem(storeKeyName) || '{}'
    return JSON.parse(savedData)
  }
  const saveDataToStorage = (data: T) => {
    if (isServer) return
    localStorage.setItem(storeKeyName, JSON.stringify(data))
  }
  return {
    loadDataFromStorage,
    saveDataToStorage
  }
}