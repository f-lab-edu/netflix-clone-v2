import { css } from '@emotion/react';
import { theme } from '../theme';

export const TextDisplay = css({
  fontFamily: `${theme.fonts.NetflixSans}, ${theme.fonts.Roboto}`,
  color: theme.color.white.default,
  padding: 0,
  margin: 0,
  marginBlockEnd: 0,
  marginBlockStart: 0
})
