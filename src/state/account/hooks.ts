import { useAtom } from 'jotai';
import { signinEmailOrPhoneAtom } from '.';

export const useSigninEmailOrPhoneAtom = () => useAtom(signinEmailOrPhoneAtom)