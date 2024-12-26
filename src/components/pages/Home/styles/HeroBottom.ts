import styled from 'styled-components'

export const HeroBottom = styled.div`
position: relative;
height: 6.25rem;
z-index: 1;
overflow-x: hidden;
box-sizing: border-box;
`

export const HeroBottomMargin = styled.div`
margin-bottom: 1.375rem;
@media (min-width: 600px) {
  margin-bottom: 1.875rem;
}
@media (min-width: 960px) {
  margin-bottom: 1.25rem;
}`

export const HeroBottomLine = styled.div`
box-sizing: border-box;
position: absolute;
height: 100%;
top: 0;
margin: auto;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
align-items: center;
border: solid .25rem transparent;
border-top-left-radius: 50% 100%;
border-top-right-radius: 50% 100%;
border-bottom: none;
background: radial-gradient( 50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100% ),black;
background-clip: padding-box;
@media all {
  width: 200%;
  left: -50%;
}
@media all and (min-width: 600px) {
  width: 180%;
  left: -40%;
}
@media all and (min-width: 960px) {
  width: 150%;
  left: -25%;
}
@media all and (min-width: 12800px) {
  width: 130%;
  left: -15%;
}
@media all and (min-width: 1920px) {
  width: 120%;
  left: -10%;
}
&:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin-top: -.25rem;
  border-radius: inherit;
  background: linear-gradient(to right, rgba(33, 13, 22, 1) 16%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 84%);
}
`