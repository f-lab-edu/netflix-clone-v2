import { useSuspenseQuery } from '@tanstack/react-query';
import { GetMembershipList } from '@/lib/network/membership/GetMembershipList';

export default function useMembershipByPlan(plan?: MembershipPlanTier) {
  return useSuspenseQuery({
    queryKey: ['membership-list'],
    queryFn: GetMembershipList,
    select({ list }) {
      return list.find(v => v.plan === plan)
    }
  })
}