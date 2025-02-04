import type { GetMembershipListResponseType } from '../types/membership';
import api from '..';

export const GetMembershipList = async () => {
  const result = await api.get<GetMembershipListResponseType>('membership/list').json()
  return result
}
