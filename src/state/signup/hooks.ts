import { useAtom } from 'jotai';
import { signupMembershipTier } from '.';

export const useSignupMembershipTier = () => useAtom(signupMembershipTier)