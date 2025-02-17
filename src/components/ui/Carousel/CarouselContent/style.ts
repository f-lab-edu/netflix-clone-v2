import { css } from '@emotion/react';

export const CarouselContentCss = css({
  position: 'relative',
  display: 'flex'
})

export const CarouselArrowBtnShellCss = css({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'calc(100% + 8vw)',
  height: '100%',
  left: '-4vw',
  pointerEvents: 'none',
  '> *': {
    display: 'grid',
    width: '4vw',
    height: '100%',
    pointerEvents: 'auto',
    cursor: 'pointer',
  }
})

export const CarouselContentShellCss = (displayContentWidth: number) => css({
  display: 'flex',
  flexBasis: '100%',
  listStyle: 'none',
  ['--carousel-content-width']: `${displayContentWidth}%`,
  columnGap: '.2vw',
  '> *': {
    width: 'calc(var(--carousel-content-width, 50%) - .2vw)',
    minWidth: 'calc(var(--carousel-content-width, 50%) - .2vw)',
    maxWIdth: 'calc(var(--carousel-content-width, 50%) - .2vw)'
  }
})