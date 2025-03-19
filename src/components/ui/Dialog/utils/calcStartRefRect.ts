export default function calcStartRefRect(ref?: HTMLElement, isFixed?: boolean) {
  if (!ref) return {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  }
  const rect = ref.getBoundingClientRect()
  return {
    left: rect.left + (isFixed ? 0 : window.scrollX),
    top: rect.top + (isFixed ? 0 : window.scrollY),
    width: rect.width,
    height: rect.height,
  }
}
