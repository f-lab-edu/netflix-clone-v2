import type { UpdateProfileRequestType, UpdateProfileResponseType } from '../types/profile';
import api from '..';

export default async function UpdateProfileApi(profile: UpdateProfileRequestType) {
  const result = await api.post<UpdateProfileResponseType>('profile', {
    json: profile
  }).json()
  return result
}