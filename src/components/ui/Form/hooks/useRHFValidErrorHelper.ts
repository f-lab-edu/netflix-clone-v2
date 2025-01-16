export default function useRHFValidErrorHelper(error?: string, isTouched?: boolean) {
  return {
    isValid: isTouched && !error,
    error: error
  }
}