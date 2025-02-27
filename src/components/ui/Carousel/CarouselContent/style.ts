import { css } from '@emotion/react';

export const CarouselContentCss = css({
  position: 'relative',
  display: 'flex',
})

export const CarouselContentListShellCss = css({
  margin: '-4vw',
  maxWidth: '100vw',
  padding: '4vw',
  overflow: 'hidden'
})

export const CarouselArrowBtnShellCss = css({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100vw',
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
  ['--carousel-content-width']: `${displayContentWidth - .2}vw`,
  columnGap: '.2vw',
  '> *': {
    width: 'var(--carousel-content-width, 50%)',
    minWidth: 'var(--carousel-content-width, 50%)',
    maxWIdth: 'var(--carousel-content-width, 50%)'
  }
})