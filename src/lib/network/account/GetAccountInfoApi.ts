import type { MyInfoResponseType } from '../types/account';
import api from '..'

export const GetAccountInfoApi = async () => {
  const result = await api.get<MyInfoResponseType>('account/me').json()
  return result
}
