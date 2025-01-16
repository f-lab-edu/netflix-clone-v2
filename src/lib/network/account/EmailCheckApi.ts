import type { EmailCheckResponseType } from '../types/account';
import api from '..'

export const EmailCheckApi = async (email: string) => {
  const result = await api.post<EmailCheckResponseType>('emailCheck', {
    json: {
      email
    }
  }).json()
  return result
}