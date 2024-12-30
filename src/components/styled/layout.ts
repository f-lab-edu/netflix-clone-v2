import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react'
import facepaint from 'facepaint'

type DisplaySize = 'xs' | 'sm' | 'md' | 'lg' | 'full'

const sizes: Record<DisplaySize, number> = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  full: 1920
}
/**
 * https://emotion.sh/docs/media-queries#facepaint
 * usage : MediaPoint({ color: [xs, sm, md, lg, full] })
 */
export const MediaPoint = facepaint(
  Object.values(sizes).slice(1).map(v => `@media (min-width: ${v}px)`)
)

export const BreakPoints = {
  xs: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.xs}px)`]: args }),
  sm: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.sm}px)`]: args }),
  md: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.md}px)`]: args }),
  lg: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.lg}px)`]: args }),
  full: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.full}px)`]: args })
}

export const w = {
  full: css({
    width: '100%'
  }),
  '1px': css({
    width: '1px'
  })
}

export const h = {
  full: css({
    height: '100%'
  })
}

export const wh = {
  full: css([
    w.full,
    h.full
  ])
}

export const position = {
  fixed: css({
    position: 'fixed'
  }),
  absolute: css({
    position: 'absolute'
  }),
  relative: css({
    position: 'relative'
  })
}

export const direction = {
  all0: css({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }),
  x0: css({
    left: 0,
    right: 0
  }),
  y0: css({
    top: 0,
    bottom: 0,
  }),
  t0: css({
    top: 0,
  }),
  b0: css({
    bottom: 0,
  }),
  l0: css({
    left: 0
  }),
  r0: css({
    right: 0
  }),
  all1: css({
    top: '1rem',
    bottom: '1rem',
    left: '1rem',
    right: '1rem',
  }),
  x1: css({
    left: '1rem',
    right: '1rem',
  }),
  y1: css({
    top: '1rem',
    bottom: '1rem',
  }),
  t1: css({
    top: '1rem',
  }),
  b1: css({
    bottom: '1rem',
  }),
  l1: css({
    left: '1rem',
  }),
  r1: css({
    right: '1rem',
  })
}

export const zIndex = {
  bg: css({
    zIndex: -1
  }),
  0: css({
    zIndex: 0
  }),
  1: css({
    zIndex: 1
  }),
  2: css({
    zIndex: 2
  })
}