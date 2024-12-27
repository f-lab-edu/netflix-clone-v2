import { css } from '@emotion/css';
import NetflixSans from './NetflixSans';
import roboto from './Roboto';
import { Theme } from '@emotion/react';

export const TextDisplay = (theme: Theme) => css({
  fontFamily: `${NetflixSans.style.fontFamily}, ${roboto.style.fontFamily}`,
  color: theme.color.netflixFontColor,
  padding: 0,
  margin: 0,
  marginBlockEnd: 0,
  marginBlockStart: 0
})
