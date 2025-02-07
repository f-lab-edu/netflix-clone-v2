import { useAtom } from 'jotai';
import { accessTokenAtom, refreshTokenAtom } from '.';

export const useAccessTokenAtom = () => useAtom(accessTokenAtom)
export const useRefreshTokenAtom = () => useAtom(refreshTokenAtom)