export default function AutoKeyGenerator(isServer: boolean, storeKeyName: string) {
  const getAutoKeyIndex = () => {
    if (isServer) return 1
    const savedData = localStorage.getItem(storeKeyName) || '1'
    return Number(savedData)
  }
  const saveAutoKeyIndex = (idx: number) => {
    if (isServer) return
    localStorage.setItem(storeKeyName, String(idx))
  }
  const issueAutoKeyIndex = () => {
    const idx = getAutoKeyIndex()
    saveAutoKeyIndex(idx + 1)
    return idx
  }
  return {
    getAutoKeyIndex,
    saveAutoKeyIndex,
    issueAutoKeyIndex
  }
}
