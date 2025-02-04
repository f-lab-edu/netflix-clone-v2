import { useAtom } from 'jotai'
import useMembershipByPlan from '@/hooks/Query/membership/useMembershipByPlan'
import { signupMembershipTier } from '@/state/Signup'

export default function useSelectedMembershipOnSteps() {
  const [choosenTier] = useAtom(signupMembershipTier)
  const { data } = useMembershipByPlan(choosenTier)
  return data
}