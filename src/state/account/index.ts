import { atomWithStorage } from 'jotai/utils';
import { SIGNIN_EMAIL_OR_PHONE } from '@/lib/network/utils';
import { JotaiSessionStorage } from '../util/Storage';

export const signinEmailOrPhoneAtom = atomWithStorage(SIGNIN_EMAIL_OR_PHONE, '', JotaiSessionStorage<string>())