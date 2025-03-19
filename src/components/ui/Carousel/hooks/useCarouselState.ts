import { useContext } from 'react';
import CarouselStateContext from '../provider/CarouselStateContext';

export default function useCarouselState() {
  const context = useContext(CarouselStateContext)
  if (!context) {
    throw new Error('CarouselStateProvider must defined first')
  }
  return context
}
