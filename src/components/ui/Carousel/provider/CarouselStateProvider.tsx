import type { ReactNode } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { useWindowWidth } from '@/state/windowSize';
import CarouselStateContext from './CarouselStateContext';

export interface IndexedItems {
  id: number
}

interface CarouselState {
  firstItemIdx: number
  isTouched: boolean
  moveSize: number
}

interface CarouselStateProviderProps {
  children: ReactNode,
  itemsLength: number
}

export default function CarouselStateProvider({ children, itemsLength }: CarouselStateProviderProps) {
  const [width] = useWindowWidth()
  const displayOnce = useMemo(() => {
    if (width >= 1400) return 6
    if (width >= 1100) return 5
    if (width >= 800) return 4
    if (width >= 500) return 3
    return 2
  }, [width])

  const [carouselState, setCarouselState] = useState<CarouselState>({
    firstItemIdx: 0,
    isTouched: false,
    moveSize: 0
  })

  const setMoveSize = useCallback((moveSize: number) => {
    if (carouselState.moveSize) return
    setCarouselState((before) => {
      let tempMoveSize = moveSize
      if (tempMoveSize > 0) {
        const temp = tempMoveSize * 2 + before.firstItemIdx
        if (temp > itemsLength && temp !== itemsLength + tempMoveSize) {
          tempMoveSize += itemsLength - temp
        }
      } else {
        const temp = tempMoveSize + before.firstItemIdx
        if (temp < 0 && Math.abs(temp) !== Math.abs(tempMoveSize)) {
          tempMoveSize += Math.abs(temp)
        }
      }
      return {
        ...before,
        moveSize: tempMoveSize
      }
    })
  }, [carouselState, itemsLength])

  const animationFinishedAction = useCallback(() => {
    setCarouselState((before) => {
      let firstItemIdx = before.firstItemIdx + before.moveSize
      if (firstItemIdx === itemsLength) {
        firstItemIdx = 0
      } else if (firstItemIdx < 0 && Math.abs(firstItemIdx) === displayOnce) {
        firstItemIdx = itemsLength - displayOnce
      }
      return {
        firstItemIdx: firstItemIdx,
        isTouched: true,
        moveSize: 0
      }
    })
  }, [itemsLength, displayOnce])

  const providerValue = useMemo(() => {
    return {
      itemsLength,
      displayOnce,
      ...carouselState,
      setMoveSize,
      animationFinishedAction
    }
  }, [itemsLength, carouselState, displayOnce, animationFinishedAction, setMoveSize])
  return <CarouselStateContext.Provider value={providerValue}>
    {children}
  </CarouselStateContext.Provider>
}