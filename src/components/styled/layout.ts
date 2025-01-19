import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
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
  /**
   * minWidth: 0px
   */
  xs: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.xs}px)`]: args }),
  /**
   * minWidth: 600px
   */
  sm: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.sm}px)`]: args }),
  /**
   * minWidth: 960px
   */
  md: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.md}px)`]: args }),
  /**
   * minWidth: 1280px
   */
  lg: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.lg}px)`]: args }),
  /**
   * minWidth: 1920px
   */
  full: (args: CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]) => css({ [`@media (min-width: ${sizes.full}px)`]: args })
}