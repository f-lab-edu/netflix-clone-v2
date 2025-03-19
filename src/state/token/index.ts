import { atomWithStorage } from 'jotai/utils';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/lib/network/utils';
import { JotaiLocalStorage } from '../util/Storage';

export const accessTokenAtom = atomWithStorage(ACCESS_TOKEN_KEY, '', JotaiLocalStorage<string>())
export const refreshTokenAtom = atomWithStorage(REFRESH_TOKEN_KEY, '', JotaiLocalStorage<string>())
