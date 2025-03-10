import { createContext } from 'react';

interface CarouselState {
  firstItemIdx: number
  isTouched: boolean
  moveSize: number
  itemsLength: number
  displayOnce: number
  itemWidth: number
  setMoveSize: (_moveSize: number) => void
  animationFinishedAction: () => void
}

const CarouselStateContext = createContext<CarouselState>({
  firstItemIdx: 0,
  isTouched: false,
  moveSize: 0,
  itemsLength: 0,
  displayOnce: 0,
  itemWidth: 0,
  setMoveSize: () => { },
  animationFinishedAction: () => { }
})

export default CarouselStateContext