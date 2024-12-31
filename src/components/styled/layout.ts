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

const directionObj: {
  [k: `all${number}`]: SerializedStyles | SerializedStyles[]
  [k: `x${number}`]: SerializedStyles | SerializedStyles[]
  [k: `y${number}`]: SerializedStyles | SerializedStyles[]
  [k: `t${number}`]: SerializedStyles | SerializedStyles[]
  [k: `b${number}`]: SerializedStyles | SerializedStyles[]
  [k: `l${number}`]: SerializedStyles | SerializedStyles[]
  [k: `r${number}`]: SerializedStyles | SerializedStyles[]
} = {}
export const direction = new Proxy<typeof directionObj>(directionObj, {
  get(target, k) {
    if (!/(all|x|y|t|b|l|r)([0-9.]+)/.test(String(k))) return undefined
    const key = k.toString() as keyof typeof directionObj
    if (!target[key]) {
      const strK = String(key)
      const size = strK.split(/(all|x|y|t|b|l|r)/)
      const num = Number(size[2])
      const tempList = []
      switch (size[1]) {
        case 'all':
          tempList.push(direction[`x${num}`])
          tempList.push(direction[`y${num}`])
          break
        case 'x':
          tempList.push(direction[`l${num}`])
          tempList.push(direction[`r${num}`])
          break
        case 'y':
          tempList.push(direction[`t${num}`])
          tempList.push(direction[`b${num}`])
          break
        case 'l':
          target[`l${num}`] = css({ left: num && `${num}rem` })
          break
        case 'r':
          target[`r${num}`] = css({ right: num && `${num}rem` })
          break
        case 't':
          target[`t${num}`] = css({ top: num && `${num}rem` })
          break
        case 'b':
          target[`b${num}`] = css({ bottom: num && `${num}rem` })
          break
      }
      if (tempList.length) {
        target[key] = tempList.flat()
      }
    }
    return target[key]
  }
})
