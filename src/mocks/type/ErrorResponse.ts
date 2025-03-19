export type ErrorResponse = {
  errorCode: number
  message: string
}

export default class ErrorException extends Error {
  public errorCode: number

  constructor(message: string, code: number, option?: ErrorOptions) {
    super(message, option)
    this.errorCode = code
  }
}
