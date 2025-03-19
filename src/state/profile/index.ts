import { atomWithStorage } from 'jotai/utils';
import { SIGNIN_CURRENT_PROFILE } from '@/lib/network/utils';
import { JotaiSessionStorage } from '../util/Storage';

// TODO: with sessionStorage
export const currentProfileAtom = atomWithStorage(SIGNIN_CURRENT_PROFILE, undefined, JotaiSessionStorage<number | undefined>())
