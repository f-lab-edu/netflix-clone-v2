import { css } from '@emotion/react';

export const CarouselShellCss = css({
  position: 'relative',
  display: 'grid',
  gridTemplateAreas: '"title chips" "content content"',
  justifyContent: 'space-between',
  alignItems: 'center',
  rowGap: '.5rem'
})

export const CarouselTitleAreaCss = css({
  gridArea: 'title',
  fontSize: '1.4vw',
  fontWeight: 500,
  textDecoration: 'none',
})

export const CarouselChipsAreaCss = css({
  gridArea: 'chips'
})

export const CarouselContentAreaCss = css({
  gridArea: 'content'
})