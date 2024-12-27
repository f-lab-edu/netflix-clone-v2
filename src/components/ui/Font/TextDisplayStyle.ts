import { css } from '@emotion/css';
import NetflixSans from './NetflixSans';
import roboto from './Roboto';

export const TextDisplay = css({
  fontFamily: `${NetflixSans.style.fontFamily}, ${roboto.style.fontFamily}`,
  color: 'var(--netflix-font-color)',
  padding: 0,
  margin: 0,
  marginBlockEnd: 0,
  marginBlockStart: 0
})
