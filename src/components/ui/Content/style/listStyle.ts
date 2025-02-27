import { css } from '@emotion/react';
import { BreakPoints } from '@/components/styled/layout';

export const ConstListStyleCss = css([
  BreakPoints(0, {
    ['--content-column-count']: '2'
  }),
  BreakPoints(500, {
    ['--content-column-count']: '3'
  }),
  BreakPoints(800, {
    ['--content-column-count']: '4'
  }),
  BreakPoints(1100, {
    ['--content-column-count']: '5'
  }),
  BreakPoints(1400, {
    ['--content-column-count']: '6'
  }),
  {
    columnGap: 'var(--content-column-gap, 0)',
    rowGap: 'var(--content-row-gap, 0)',
    ['--content-base-width']: 'calc(92vw / var(--content-column-count, 2))',
    ['--content-width']: 'calc(var(--content-base-width) - var(--content-column-gap, 0vw))',
    '> *': {
      width: 'var(--content-width, 50vw)',
      minWidth: 'var(--content-width, 50vw)',
      maxWidth: 'var(--content-width, 50vw)'
    }
  }
])