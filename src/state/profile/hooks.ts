import { useAtom } from 'jotai';
import { currentProfileAtom } from '.';

export const useCurrentProfileAtom = () => useAtom(currentProfileAtom)