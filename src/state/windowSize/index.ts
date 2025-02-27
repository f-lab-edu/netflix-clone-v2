import { atom, useAtom } from 'jotai';
import { useMemo } from 'react';

const widthAtom = atom(0)
const heightAtom = atom(0)

export const useWindowWidth = () => useAtom<number>(widthAtom)
export const useWindowHeight = () => useAtom<number>(heightAtom)

export const useWindowSize = () => {
  const [width] = useWindowWidth()
  const [height] = useWindowHeight()
  const isLarge = useMemo(() => width > 1050, [width])
  return {
    width,
    height,
    isLarge
  }
}