import type { MyInfoResponseType } from '@/lib/network/types/account';
import { useQuery } from '@tanstack/react-query';
import { GetAccountInfoApi } from '@/lib/network/account/GetAccountInfoApi';
import { MY_INFO_QUERY_KEY } from '@/lib/react-query/keys/account';

export default function useGetSigninAccountInfo(
  options?: CustomQueryOptions<MyInfoResponseType>
) {
  return useQuery<MyInfoResponseType>({
    ...options,
    queryKey: MY_INFO_QUERY_KEY,
    queryFn: GetAccountInfoApi
  })
}