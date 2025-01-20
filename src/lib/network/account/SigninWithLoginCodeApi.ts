import type { SigninWithCodeRequestType, SigninWithCodeResponseType } from '../types/account';
import api from '..'

export const SigninWithLoginCodeApi = async (params: SigninWithCodeRequestType) => {
  const result = await api.post<SigninWithCodeResponseType>('signinWithLoginCode', {
    json: params
  }).json()
  return result
}