import type { DirectionObjectType, SizeObjectType } from './helper/DirectionHelper';
import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react'
import facepaint from 'facepaint'
import { generateDirectionObject, generateSizeObject } from './helper/DirectionHelper';

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

const sizeObj: SizeObjectType = {}
export const size = generateSizeObject(
  sizeObj,
  'width',
  'height'
)

const directionObj: DirectionObjectType = {}
export const direction = generateDirectionObject(
  directionObj,
  'left',
  'right',
  'top',
  'bottom'
)

const marginObject: DirectionObjectType = {}
export const margin = generateDirectionObject(
  marginObject,
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom'
)

const paddingObject: DirectionObjectType = {}
export const padding = generateDirectionObject(
  paddingObject,
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom'
)
