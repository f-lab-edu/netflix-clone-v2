import { atomWithStorage } from 'jotai/utils';
import { SIGNUP_MEMBERSHIP_TIER } from '@/lib/network/utils';
import { JotaiSessionStorage } from '../util/Storage';

export const signupMembershipTier = atomWithStorage(SIGNUP_MEMBERSHIP_TIER, undefined, JotaiSessionStorage<MembershipPlanTier | undefined>())
