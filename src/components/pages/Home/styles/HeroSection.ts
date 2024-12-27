import { css } from '@emotion/css';
import { MediaPoint } from '@/components/styled/layout';

export const HeroSection = css({
  width: '100%',
  position: 'relative',
  zIndex: 1
})
export const HeroTitle = css(MediaPoint({
  marginBottom: ['.5rem', , , '1rem', '1.5rem'],
  fontSize: ['2rem', , '2.5rem', '3.5rem', '4rem'],
  fontWeight: ['700', , , '900']
}), {
  lineHeight: '125%',
})

export const HeroDescrpition1 = css(MediaPoint({
  fontSize: ['1rem', , , '1.25rem'],
  fontWeight: ['400', , , '500'],
  marginBottom: ['1rem', , '1.5rem', '2rem']
}))

export const HeroDescrpition2 = css({
  fontWeight: '400',
  lineHeight: 1.5,
  fontSize: '1rem'
})