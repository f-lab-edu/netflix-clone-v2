import type { MyInfoResponseType } from '@/lib/network/types/account';
import { useQuery } from '@tanstack/react-query';
import { GetAccountInfoApi } from '@/lib/network/account/GetAccountInfoApi';
import { MY_INFO_QUERY_KEY } from './keys/account';

export default function useGetSigninAccountInfo(options: {
  enabled: boolean
}) {
  return useQuery<MyInfoResponseType>({
    queryKey: MY_INFO_QUERY_KEY,
    queryFn: GetAccountInfoApi,
    ...options
  })
}