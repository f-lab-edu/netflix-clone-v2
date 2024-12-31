import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { theme } from '../ui/theme';

export const fontFamily = css({
  fontFamily: `${theme.fonts.NetflixSans + ', ' + theme.fonts.Roboto};`
})

const fontSizeTemp: { [k: string | symbol]: SerializedStyles } = {}

export const fontSize = new Proxy(fontSizeTemp, {
  get(target, p) {
    if (!target[p]) {
      target[p] = css({
        fontSize: `${String(p)}rem`
      })
    }
    return target[p]
  }
})

export const fontColor = {
  currentColor: css({
    color: 'currentcolor',
    fill: 'currentcolor'
  })
}