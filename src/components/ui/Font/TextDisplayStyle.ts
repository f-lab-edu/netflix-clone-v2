import { css } from 'styled-components';
import NetflixSans from './NetflixSans';
import roboto from './Roboto';

export const TextDisplay = css`
font-family: ${NetflixSans.style.fontFamily}, ${roboto.style.fontFamily};
color: var(--netflix-font-color);
padding: 0;
margin: 0;
margin-block-end: 0;
margin-block-start: 0;`