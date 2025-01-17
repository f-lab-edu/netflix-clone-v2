export default function RHFValidErrorHelper(error?: string, isTouched?: boolean) {
  return {
    isValid: isTouched && !error,
    error: error
  }
}