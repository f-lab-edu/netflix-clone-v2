import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { theme } from '../ui/theme';

export const fontFamily = css({
  fontFamily: `${theme.fonts.NetflixSans + ', ' + theme.fonts.Roboto};`
})

export const fontWeight = {
  900: css({
    fontWeight: 900
  }),
  700: css({
    fontWeight: 700
  }),
  600: css({
    fontWeight: 600
  }),
  500: css({
    fontWeight: 500
  }),
  400: css({
    fontWeight: 400
  })
}

export const lineHeight = {
  '150': css({
    default: 1.5
  }),
  '125': css({
    default: 1.25
  }),
  '100': css({
    default: 1
  })
}

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