import type { DeleteProfileResponseType } from '../types/profile';
import api from '..';

export default async function DeleteProfileApi(id: number) {
  const result = api.delete<DeleteProfileResponseType>(`profile/${id}`)
  return result
}