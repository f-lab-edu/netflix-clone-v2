import type { GetProfilesResponseType } from '../types/profile';
import api from '..'

export default async function GetProfliesApi() {
  const result = await api.get<GetProfilesResponseType>('profile')
  return result
}