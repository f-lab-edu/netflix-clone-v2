import styled from 'styled-components';
import MediaQuery from '@/components/styled/layout';
import { TextDisplay } from '@/components/ui/Font/TextDisplayStyle';

export const HeroSection = styled.section`
width: 100%;
position: relative;
z-index: 1;
`
export const HeroTitle = styled.h1`
${TextDisplay}
line-height: 125%;
${MediaQuery.xs`
  margin-bottom: .5rem
  font-size: 2rem;
  font-weight: 700;
`}
${MediaQuery.md`
  font-size: 2.5rem;
`}
${MediaQuery.lg`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem
`}
${MediaQuery.full`
  font-size: 4rem;
  margin-bottom: 1.5rem
`}`

export const HeroDescrpition1 = styled.p`
${TextDisplay}
${MediaQuery.xs`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`}
${MediaQuery.md`
  margin-bottom: 1.5rem;
`}
${MediaQuery.lg`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 2rem;
`}
`
export const HeroDescrpition2 = styled.h3`
${TextDisplay}
font-weight: 400;
line-height: 1.5;
font-size: 1rem;
`