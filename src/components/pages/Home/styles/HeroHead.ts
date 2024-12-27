import TopLogo from '@assets/netflix/top-logo.svg'
import Link from 'next/link';
import styled from '@emotion/styled';
import { MediaPoint } from '@/components/styled/layout';
import { ButtonStyle } from '@/components/ui/Button/ButtonStyle';

export const HeroHead = styled.div`
background: linear-gradient( 180deg, rgba(0, 0, 0, 0.8000) 0.000%, rgba(0, 0, 0, 0.7889) 8.333%, rgba(0, 0, 0, 0.7556) 16.67%, rgba(0, 0, 0, 0.7000) 25.00%, rgba(0, 0, 0, 0.6222) 33.33%, rgba(0, 0, 0, 0.5222) 41.67%, rgba(0, 0, 0, 0.4000) 50.00%, rgba(0, 0, 0, 0.2778) 58.33%, rgba(0, 0, 0, 0.1778) 66.67%, rgba(0, 0, 0, 0.1000) 75.00%, rgba(0, 0, 0, 0.04444) 83.33%, rgba(0, 0, 0, 0.01111) 91.67%, rgba(0, 0, 0, 0.000) 100.0% );
position: relative;
z-index: 2;
width: 100%;
`

export const HeroHeadLayer = styled.div`
width: 100%;
max-width: 120rem;
height: 7.5rem;
margin: 0 auto -7.5rem auto;
${MediaPoint({
  padding: [
    '0 1.5rem',
    '0 2rem',
    '0 5rem',
    '0 9.25rem',
    '0 22.125rem'
  ]
})}`

export const HeroHeadContent = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
${MediaPoint({
  height: [
    '5rem',
    ,
    ,
    '5.5rem'
  ]
})}
`
export const HeroHeadLogo = styled(TopLogo)`
color: var(--netflix-red-color);
fill: currentColor;
display: block;
${MediaPoint({
  width: ['5.5625rem', , '9.25rem'],
  height: ['1.5rem', , '2.5rem']
})}
`

export const HeroHeadRightSide = styled.div`
display: flex;
flex-wrap: nowrap;
column-gap: 12px;
`

export const HeroHeadSigninLink = styled(Link)`
${ButtonStyle}
min-height: 2rem;
border-radius: 0.25rem;
line-height: 1;
font-size: 14px;
font-weight: 500;
padding: .25rem 1rem;
`