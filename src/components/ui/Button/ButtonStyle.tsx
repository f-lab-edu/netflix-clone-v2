import { css } from 'styled-components';

export const ButtonStyle = css`
line-height: 1;
background-color: var(--netflix-red-color);
transition-duration: .25s;
transition-property: background-color, border-color;
transition-timing-function: cubic-bezier(0.4,0,0.68,0.06);
border: 0px;
border-radius: 0.25rem;
align-items: center;
position: relative;
box-sizing: border-box;
display: inline-flex;
color: var(--netflix-font-color);
fill: currentColor;
vertical-align: text-top;

&:hover {
  transition-timing-function: cubic-bezier(0.32,0.94,0.6,1);
  background-color: var(--netflix-red-color-hover);
  border-color: black
}
&:active {
  transition: none;
  color: rgba(255,255,255,0.7);
  background-color: var(--netflix-red-color-active);
}
&:focus:not(:focus-visible) {
  outline: none;
}
`
