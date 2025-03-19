import type { GetMembershipListResponseType } from '@/lib/network/types/membership';
import { useSuspenseQuery } from '@tanstack/react-query';
import { GetMembershipList } from '@/lib/network/membership/GetMembershipList';
import { MEMBERSHIP_LIST_QUERY_KEY } from '@/lib/react-query/keys/membership';

export default function useMembershipList<Selected = GetMembershipListResponseType>(
  options?: CustomQueryOptions<GetMembershipListResponseType, Selected>
) {
  return useSuspenseQuery({
    queryKey: MEMBERSHIP_LIST_QUERY_KEY,
    queryFn: GetMembershipList,
    ...options,
  })
}
