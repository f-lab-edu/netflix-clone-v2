import type { SigninRequestType, SigninResponseType } from '../types/account';
import api from '..'

export const SigninApi = async (params: SigninRequestType) => {
  const result = await api.post<SigninResponseType>('signin', {
    json: params
  }).json()
  return result
}
