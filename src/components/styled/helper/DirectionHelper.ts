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
  const proxyGet = (target: SizeObjectType, k: symbol | string) => {
    if (!sizePattern.test(String(k))) return undefined
    const key = k.toString() as keyof typeof obj
    if (target[key]) return target[key]
    const strK = String(key)
    const size = strK.split(sizePattern)
    const num = Number(size[2])
    const tempList = []

    const w = css({ [width]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
    const h = css({ [height]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
    if (size[1] === 'a' || size[1] === 'w') tempList.push(w)
    if (size[1] === 'a' || size[1] === 'h') tempList.push(h)

    return target[key] = tempList
  }
  const proxyObj = new Proxy<SizeObjectType>(obj, {
    get: proxyGet
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
  const proxyGet = (target: DirectionObjectType, k: symbol | string) => {
    if (!directionPattern.test(String(k))) return undefined
    const key = k.toString() as keyof typeof obj
    if (target[key]) return target[key]

    const strK = String(key)
    const size = strK.split(directionPattern)
    const num = Number(size[2])
    const tempList = []

    const l = css({ [left]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
    const r = css({ [right]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
    const t = css({ [top]: Number.isNaN(num) ? size[2] : num && `${num}rem` })
    const b = css({ [bottom]: Number.isNaN(num) ? size[2] : num && `${num}rem` })

    if (size[1] === 'a' || size[1] === 'x' || size[1] === 'r') tempList.push(r)
    if (size[1] === 'a' || size[1] === 'x' || size[1] === 'l') tempList.push(l)
    if (size[1] === 'a' || size[1] === 'y' || size[1] === 't') tempList.push(t)
    if (size[1] === 'a' || size[1] === 'y' || size[1] === 'b') tempList.push(b)

    return target[key] = tempList
  }
  const proxyObj = new Proxy<DirectionObjectType>(obj, {
    get: proxyGet
  })
  return proxyObj
}