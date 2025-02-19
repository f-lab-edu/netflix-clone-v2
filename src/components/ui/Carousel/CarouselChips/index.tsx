import { useMemo } from 'react'
import useCarouselState from '../hooks/useCarouselState'
import { CarouselChipsActiveCss, CarouselChipsAreaCss, CarouselChipsCss } from './style'

export default function CarouselChips(props: CssProps) {
  const { displayOnce, firstItemIdx, itemsLength } = useCarouselState()

  const maxStepCount = useMemo(() => {
    return Math.ceil(itemsLength / displayOnce)
  }, [itemsLength, displayOnce])

  const nowStep = useMemo(() => {
    return Math.ceil((firstItemIdx + displayOnce) / displayOnce)
  }, [firstItemIdx, displayOnce])

  const displayArray = useMemo(() => {
    const temp = Array(maxStepCount).fill(0)
    temp[nowStep - 1] = 1
    return temp
  }, [nowStep, maxStepCount])
  return <ul {...props} css={CarouselChipsAreaCss} >
    {
      displayArray.map((v, i) => <li key={`chip-${i}`} css={[CarouselChipsCss, v ? CarouselChipsActiveCss : undefined]}></li>)
    }
  </ul>
}