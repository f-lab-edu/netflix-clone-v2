import type { ErrorResponse } from './error';

export type EmailCheckRequestType = {
  email: string
}
export type EmailCheckResponseType = {
  checkResult: boolean
} & ErrorResponse

export type SignupRequestType = {
  email: string
  password: string
  policy: boolean
  specialOffer: boolean
}
export type SignupResponseType = {
  result: boolean
} & ErrorResponse

export type RefreshTokenRequestType = {
  refreshToken: string
}
export type RefreshTokenResponseType = {
  accessToken: string
  refreshToken: string
} & ErrorResponse

export type SigninRequestType = {
  emailOrPhone: string
  password: string
}
export type SigninResponseType = RefreshTokenResponseType & ErrorResponse

export type SigninWithCodeRequestType = {
  emailOrPhone: string
}
export type SigninWithCodeResponseType = {
  result: boolean
}

export type MyInfoResponseType = {
  accountInfo: AccountBaseInfo
} & ErrorResponse
