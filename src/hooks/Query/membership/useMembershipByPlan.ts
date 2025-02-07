import useMembershipList from './useMembershipList';

export default function useMembershipByPlan(plan?: MembershipPlanTier) {
  return useMembershipList({
    select({ list }) {
      return list.find(v => v.plan === plan)
    }
  })
}