import type { GetProfileResponseType } from '../types/profile';
import api from '..'

export default async function GetProfileByIdApi(id: number) {
  const result = await api.get<GetProfileResponseType>(`profile/${id}`)
  return result
}
