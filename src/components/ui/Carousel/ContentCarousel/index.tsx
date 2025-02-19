import type { ReactNode } from 'react';
import Carousel from '@/components/ui/Carousel/Carousel';
import NormalContent from '@/components/ui/Content/NormalContent';

interface ContentCarouselProps {
  title: ReactNode
  items: Content[]
}

export default function ContentCarousel(props: ContentCarouselProps) {
  return <Carousel {...props} animeDuration='1000ms'>
    {(item) => {
      return <NormalContent content={item} />
    }}
  </Carousel>
}