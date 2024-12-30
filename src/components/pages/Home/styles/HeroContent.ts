import styled from '@emotion/styled'
import { MediaPoint } from '@/components/styled/layout'

export const HeroContentShell = styled.div`
position: relative;
z-index: 1;
width: 100%;
max-width: 120rem;
margin-bottom: 0;
margin-left: auto;
margin-right: auto;
`

export const HeroContent = styled.div`
overflow: hidden;
display: flex;
position: relative;
margin: 0 auto;
padding-top: 100px;
background-size: cover;
background-position: center;
align-items: flex-end;
justify-content: center;
z-index: 3;
&:before {
  content: '';
  width: 1px;
  margin-left: -1px;
  height: 0;
  padding-top: 46.666666666666664%;
  box-sizing: border-box;
}`
export const HeroContentDetail = styled.div`
display: flex;
flex-direction: column;
flex: 1;
z-index: 3;
`
export const HeroContentDetailShell = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 120rem;
justify-content: center;
padding: 0 2rem 2rem;
margin: -2rem auto 0 auto;
${MediaPoint({ minHeight: ['31rem', , '37rem', 'min(80vh, 45rem)'] })}
`
export const HeroContentDetailContentLayout = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
text-align: center;
align-self: center;
${MediaPoint({ maxWidth: ['100%', '27rem', '31.75rem', '36.75rem', '41.5rem'] })}
`
export const HeroContentBg = styled.div`
position: absolute;
width: 100%;
height: 100%;
overflow: hidden;
margin: 0;`
export const HeroContentBgShadow = styled.div([{
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2,
}, MediaPoint({
  backgroundImage: [
    'linear-gradient(360deg, rgba(0, 0, 0, 0.9000) 0.000%, rgba(0, 0, 0, 0.8965) 8.500%, rgba(0, 0, 0, 0.8861) 17.00%, rgba(0, 0, 0, 0.8688) 25.50%, rgba(0, 0, 0, 0.8444) 34.00%, rgba(0, 0, 0, 0.8132) 42.50%, rgba(0, 0, 0, 0.7750) 51.00%, rgba(0, 0, 0, 0.7368) 59.50%, rgba(0, 0, 0, 0.7056) 68.00%, rgba(0, 0, 0, 0.6813) 76.50%, rgba(0, 0, 0, 0.6639) 85.00%, rgba(0, 0, 0, 0.6535) 93.50%, rgba(0, 0, 0, 0.6500) 102.0%)',
    'linear-gradient(360deg, rgba(0, 0, 0, 0.8500) 3.000%, rgba(0, 0, 0, 0.8465) 11.08%, rgba(0, 0, 0, 0.8361) 19.17%, rgba(0, 0, 0, 0.8187) 27.25%, rgba(0, 0, 0, 0.7944) 35.33%, rgba(0, 0, 0, 0.7632) 43.42%, rgba(0, 0, 0, 0.7250) 51.50%, rgba(0, 0, 0, 0.6868) 59.58%, rgba(0, 0, 0, 0.6556) 67.67%, rgba(0, 0, 0, 0.6313) 75.75%, rgba(0, 0, 0, 0.6139) 83.83%, rgba(0, 0, 0, 0.6035) 91.92%, rgba(0, 0, 0, 0.6000) 100.0%)',
    'linear-gradient(12deg, rgba(0, 0, 0, 0.8500) 36.00%, rgba(0, 0, 0, 0.8465) 40.58%, rgba(0, 0, 0, 0.8361) 45.17%, rgba(0, 0, 0, 0.8187) 49.75%, rgba(0, 0, 0, 0.7944) 54.33%, rgba(0, 0, 0, 0.7632) 58.92%, rgba(0, 0, 0, 0.7250) 63.50%, rgba(0, 0, 0, 0.6868) 68.08%, rgba(0, 0, 0, 0.6556) 72.67%, rgba(0, 0, 0, 0.6313) 77.25%, rgba(0, 0, 0, 0.6139) 81.83%, rgba(0, 0, 0, 0.6035) 86.42%, rgba(0, 0, 0, 0.6000) 91.00%)',
    'linear-gradient(7deg, rgba(0, 0, 0, 0.8500) 10.00%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6000) 97.00%)',
    'linear-gradient(360deg, rgba(0, 0, 0, 0.8500) 8.000%, rgba(0, 0, 0, 0.8465) 15.67%, rgba(0, 0, 0, 0.8361) 23.33%, rgba(0, 0, 0, 0.8187) 31.00%, rgba(0, 0, 0, 0.7944) 38.67%, rgba(0, 0, 0, 0.7632) 46.33%, rgba(0, 0, 0, 0.7250) 54.00%, rgba(0, 0, 0, 0.6868) 61.67%, rgba(0, 0, 0, 0.6556) 69.33%, rgba(0, 0, 0, 0.6312) 77.00%, rgba(0, 0, 0, 0.6139) 84.67%, rgba(0, 0, 0, 0.6035) 92.33%, rgba(0, 0, 0, 0.6000) 100.0%)'
  ]
})])
