import useMembershipByPlan from '@/hooks/Query/membership/useMembershipByPlan'
import { useSignupMembershipTier } from '@/state/signup/hooks'

export default function useSelectedMembershipOnSteps() {
  const [chosenTier] = useSignupMembershipTier()
  const { data } = useMembershipByPlan(chosenTier)
  return data
}
