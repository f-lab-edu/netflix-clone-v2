import styled from '@emotion/styled'
import { MediaPoint } from '@/components/styled/layout';
import { TextDisplay } from '@/components/ui/Font/TextDisplayStyle';

export const HeroSection = styled.section({
  width: '100%',
  position: 'relative',
  zIndex: 1
})

export const HeroTitle = styled.h1([
  TextDisplay,
  MediaPoint({
    marginBottom: ['.5rem', , , '1rem', '1.5rem'],
    fontSize: ['2rem', , '2.5rem', '3.5rem', '4rem'],
    fontWeight: ['700', , , '900']
  }), {
    lineHeight: '125%',
  }
])

export const HeroDescrpition1 = styled.p([TextDisplay, MediaPoint({
  fontSize: ['1rem', , , '1.25rem'],
  fontWeight: ['400', , , '500'],
  marginBottom: ['1rem', , '1.5rem', '2rem']
})])

export const HeroDescrpition2 = styled.h3([TextDisplay, {
  fontWeight: '400',
  lineHeight: 1.5,
  fontSize: '1rem'
}])