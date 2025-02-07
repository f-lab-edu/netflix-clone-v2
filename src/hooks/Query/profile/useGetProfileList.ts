import { useQuery } from '@tanstack/react-query';
import GetProfliesApi from '@/lib/network/profile/GetProfliesApi';
import { GET_PROFILES_QUERY_KEY } from '../keys/profile';

export default function useGetProfiles() {
  return useQuery({
    queryKey: GET_PROFILES_QUERY_KEY,
    queryFn: () => GetProfliesApi()
  })
}