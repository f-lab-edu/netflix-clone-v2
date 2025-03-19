import { useQuery } from '@tanstack/react-query';
import GetProfileByIdApi from '@/lib/network/profile/GetProfileByIdApi';
import { GET_PROFILE_BY_ID_QUERY_KEY } from '../keys/profile';

export default function useGetProfileById(id: number) {
  return useQuery({
    queryKey: GET_PROFILE_BY_ID_QUERY_KEY(id),
    queryFn: () => GetProfileByIdApi(id)
  })
}
