export default function RHFValidErrorHelper(error?: string | boolean, isTouched?: boolean) {
  return {
    isValid: isTouched && !error,
    error: error
  }
}