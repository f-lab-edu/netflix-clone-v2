export default function calcStartRefRect(ref?: HTMLElement) {
  if (!ref) return {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }
  const rect = ref.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height,
  }
}