import type { SignupRequestType, SignupResponseType } from '../types/account';
import api from '..'

export const SignupApi = async (params: SignupRequestType) => {
  const result = await api.post<SignupResponseType>('signup', {
    json: params
  }).json()
  return result
}
