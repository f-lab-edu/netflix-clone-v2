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

type CssArgs = CSSObject | SerializedStyles | (CSSObject | SerializedStyles)[]

const BreakPointsBase = (size: number, args: CssArgs) => css({ [`@media (min-width: ${size}px)`]: args })
const BreakPoints = Object.assign(BreakPointsBase, {
  /**
   * minWidth: 0px
   */
  xs: (args: CssArgs) => BreakPointsBase(sizes.xs, args),
  /**
   * minWidth: 600px
   */
  sm: (args: CssArgs) => BreakPointsBase(sizes.sm, args),
  /**
   * minWidth: 960px
   */
  md: (args: CssArgs) => BreakPointsBase(sizes.md, args),
  /**
   * minWidth: 1280px
   */
  lg: (args: CssArgs) => BreakPointsBase(sizes.lg, args),
  /**
   * minWidth: 1920px
   */
  full: (args: CssArgs) => BreakPointsBase(sizes.full, args)
})
export {
  BreakPoints
}