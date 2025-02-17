import type { ReactNode } from 'react';
import CarouselChips from '../CarouselChips';
import CarouselContent from '../CarouselContent';
import CarouselStateProvider from '../provider/CarouselStateProvider';
import { CarouselChipsAreaCss, CarouselContentAreaCss, CarouselShellCss, CarouselTitleAreaCss } from './style';

interface IndexedItems {
  id: number
}

interface CarouselProps<T extends IndexedItems = IndexedItems> {
  title?: ReactNode
  items: T[]
  children: (_item: T, _idx: number) => ReactNode
  animeDuration: string
}

export default function Carousel<T extends IndexedItems = IndexedItems>({
  title, ...carouselContentsProps
}: CarouselProps<T>) {

  return <div css={CarouselShellCss}>
    <div css={CarouselTitleAreaCss}>
      {title}
    </div>
    <CarouselStateProvider itemsLength={carouselContentsProps.items.length}>
      <CarouselChips css={CarouselChipsAreaCss} />
      <CarouselContent css={CarouselContentAreaCss} {...carouselContentsProps} />
    </CarouselStateProvider>
  </div >
}