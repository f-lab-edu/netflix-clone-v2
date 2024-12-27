import type { CSSProp } from 'styled-components';
import type { Styles } from 'styled-components/dist/types';
import { css } from 'styled-components';

type DisplaySize = 'xs' | 'sm' | 'md' | 'lg' | 'full'

const sizes: Record<DisplaySize, number> = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  full: 1920
}

const MediaQuery = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: Styles<object> | TemplateStringsArray,
      ...interpolations: CSSProp[]
    ) => css`
    @media all and (min-width: ${value}px) {
      ${css(first, ...interpolations)}
    }`
  }
}, {}) as Record<DisplaySize, typeof css>
export default MediaQuery