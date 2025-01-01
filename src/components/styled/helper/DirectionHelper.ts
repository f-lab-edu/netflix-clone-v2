import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

export type SizeObjectType = {
  [k: `a-${number | string}`]: SerializedStyles | SerializedStyles[]
  [k: `w-${number | string}`]: SerializedStyles | SerializedStyles[]
  [k: `h-${number | string}`]: SerializedStyles | SerializedStyles[]
}

export type DirectionObjectType = {
  [k: `a-${number | string}`]: SerializedStyles | SerializedStyles[]
  [k: `x-${number | string}`]: SerializedStyles | SerializedStyles[]
  [k: `y-${number | string}`]: SerializedStyles | SerializedStyles[]
  [k: `t-${number | string}`]: SerializedStyles | SerializedStyles[]
  [k: `b-${number | string}`]: SerializedStyles | SerializedStyles[]
  [k: `l-${number | string}`]: SerializedStyles | SerializedStyles[]
  [k: `r-${number | string}`]: SerializedStyles | SerializedStyles[]
}

const directionPattern = /[axytblr]-([a-z0-9.%]+|[0-9.]+)/
const sizePattern = /[awh]-([a-z0-9.%]+|[0-9.]+)/

export const generateSizeObject = (
  obj: SizeObjectType,
  width: keyof CSSObject,
  height: keyof CSSObject
) => {
  const proxyObj = new Proxy<SizeObjectType>(obj, {
    get(target, k) {
      if (!sizePattern.test(String(k))) return undefined
      const key = k.toString() as keyof typeof obj
      if (target[key]) return target[key]
      const strK = String(key)
      const size = strK.split(sizePattern)
      const num = Number(size[2])
      const tempList = []
      switch (size[1]) {
        case 'a':
          tempList.push(proxyObj[`w-${size[2]}`])
          tempList.push(proxyObj[`h-${size[2]}`])
          break
        case 'w':
          target[key] = css({ [width]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
          break
        case 'h':
          target[key] = css({ [height]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
          break
      }
      if (tempList.length) {
        target[key] = tempList.flat()
      }
      return target[key]
    }
  })
  return proxyObj
}

export const generateDirectionObject = (
  obj: DirectionObjectType,
  left: keyof CSSObject,
  right: keyof CSSObject,
  top: keyof CSSObject,
  bottom: keyof CSSObject
) => {
  const proxyObj = new Proxy<DirectionObjectType>(obj, {
    get(target, k) {
      if (!directionPattern.test(String(k))) return undefined
      const key = k.toString() as keyof typeof obj
      if (target[key]) return target[key]

      const strK = String(key)
      const size = strK.split(directionPattern)
      const num = Number(size[2])
      const tempList = []
      switch (size[1]) {
        case 'a':
          tempList.push(proxyObj[`x-${size[2]}`])
          tempList.push(proxyObj[`y-${size[2]}`])
          break
        case 'x':
          tempList.push(proxyObj[`l-${size[2]}`])
          tempList.push(proxyObj[`r-${size[2]}`])
          break
        case 'y':
          tempList.push(proxyObj[`t-${size[2]}`])
          tempList.push(proxyObj[`b-${size[2]}`])
          break
        case 'l':
          target[key] = css({ [left]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
          break
        case 'r':
          target[key] = css({ [right]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
          break
        case 't':
          target[key] = css({ [top]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
          break
        case 'b':
          target[key] = css({ [bottom]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
          break
      }
      if (tempList.length) {
        target[key] = tempList.flat()
      }
      return target[key]
    }
  })
  return proxyObj
}