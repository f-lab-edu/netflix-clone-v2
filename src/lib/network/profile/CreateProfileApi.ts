import type { CreateProfileRequestType, CreateProfileResponseType } from '../types/profile';
import api from '..';

export default async function CreateProfileApi(profile: CreateProfileRequestType) {
  const result = await api.put<CreateProfileResponseType>('profile', {
    json: profile
  }).json()
  return result
}