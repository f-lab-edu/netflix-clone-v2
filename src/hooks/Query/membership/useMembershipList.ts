import { useSuspenseQuery } from '@tanstack/react-query';
import { GetMembershipList } from '@/lib/network/membership/GetMembershipList';

export default function useMembershipList() {

  return useSuspenseQuery({
    queryKey: ['membership-list'],
    queryFn: GetMembershipList,
    select: ({ list }) => list
  })
}