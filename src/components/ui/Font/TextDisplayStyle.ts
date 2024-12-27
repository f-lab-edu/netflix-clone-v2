import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const TextDisplay = (theme: Theme) => css({
  fontFamily: `${theme.fonts.NetflixSans}, ${theme.fonts.Roboto}`,
  color: theme.color.white.default,
  padding: 0,
  margin: 0,
  marginBlockEnd: 0,
  marginBlockStart: 0
})
