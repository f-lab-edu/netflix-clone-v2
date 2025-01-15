export type EmailCheckRequestType = {
  email: string
}
export type EmailCheckResponseType = {
  checkResult: boolean
}

export type RefreshTokenRequestType = {
  refreshToken: string
}
export type RefreshTokenResponseType = {
  accessToken: string
  refreshToken: string
}

export type LoginRequestType = {
  email: string
  password: string
}
export type LoginResponseType = RefreshTokenResponseType

export type MyInfoResponseType = AccountBaseInfo