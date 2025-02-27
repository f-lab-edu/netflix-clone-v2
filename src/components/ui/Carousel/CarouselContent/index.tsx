import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { ConstListStyleCss } from '../../Content/style/listStyle';
import ConditionalRender from '../../utils/ConditionalRender';
import useCarouselState from '../hooks/useCarouselState';
import { CarouselArrowBtnShellCss, CarouselContentCss, CarouselContentListShellCss, CarouselContentShellCss } from './style';

export interface IndexedItems {
  id: number
}

export interface CarouselContentProps<T extends IndexedItems = IndexedItems> {
  items: T[]
  animeDuration: string
  children: (_item: T, _idx: number) => ReactNode
}

export default function CarouselContent<T extends IndexedItems = IndexedItems>({
  items,
  animeDuration,
  children,
  className
}: CarouselContentProps<T> & CssProps) {
  const {
    isTouched,
    firstItemIdx,
    displayOnce,
    moveSize,
    itemWidth,
    setMoveSize,
    animationFinishedAction
  } = useCarouselState()

  const displayItems = useMemo(() => {
    const tempList = []
    const pos = isTouched ? firstItemIdx - (displayOnce + 1) : firstItemIdx
    const listSize = isTouched ? 3 * displayOnce + 2 : 2 * displayOnce + 1
    if (pos < 0) {
      tempList.push(...items.slice(pos), ...items.slice(0, listSize + pos))
    } else {
      tempList.push(...items.slice(pos, pos + listSize))
    }
    if (tempList.length !== listSize) {
      tempList.push(...items.slice(0, listSize - tempList.length))
    }
    return tempList
  }, [firstItemIdx, displayOnce, isTouched, items])

  // window's left, right padding size is 8vw
  const transitionSizeByItem = useMemo(() => itemWidth * -1, [itemWidth])

  const transitionStyle = useMemo(() => {
    const x = isTouched ?
      `${(moveSize + displayOnce + 1) * transitionSizeByItem}vw` :
      `${moveSize * transitionSizeByItem}vw`
    return {
      x,
      transitionDuration: moveSize ? animeDuration : '0ms'
    }
  }, [isTouched, transitionSizeByItem, displayOnce, moveSize, animeDuration])

  const moveBefore = () => {
    setMoveSize(displayOnce * -1)
  }
  const moveNext = () => {
    setMoveSize(displayOnce)
  }
  return <div css={CarouselContentCss} className={className}>
    <div css={CarouselContentListShellCss}>
      <motion.ul
        css={[CarouselContentShellCss, ConstListStyleCss]}
        onTransitionEnd={animationFinishedAction}
        style={transitionStyle}
      >
        {
          displayItems.map((item, idx) => {
            return <li key={`item-${item.id}`}>
              {children(item, idx)}
            </li>
          })
        }
      </motion.ul>
    </div>
    <div css={CarouselArrowBtnShellCss}>
      <div>
        <ConditionalRender.Boolean
          condition={isTouched}
          render={{
            true: <button onClick={moveBefore}>
              {'<'}
            </button>
          }}
        />
      </div>
      <div>
        <button onClick={moveNext}>{'>'}</button>
      </div>
    </div>
  </div>
}