export const isNumber = (n: unknown): boolean => {
  if (typeof n !== 'number') return false
  if (Number.isNaN(n)) return false
  return true
}
