import styled from '@emotion/styled'
import { MediaPoint } from '@/components/styled/layout'

export const HeroBottom = styled.div([{
  position: 'relative',
  height: '6.25rem',
  zIndex: 1,
  overflowX: 'hidden',
  boxSizing: 'border-box',
}])

export const HeroBottomMargin = styled.div([
  MediaPoint({
    marginBottom: ['1.375rem', '1.875rem', '1.25rem']
  })
])

export const HeroBottomLine = styled.div([
  MediaPoint({
    width: ['200%', '180%', '150%', '130%', '120%'],
    left: ['-50%', '-40%', '-25%', '-15%', '-10%']
  }),
  {
    boxSizing: 'border-box',
    position: 'absolute',
    height: '100%',
    top: 0,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    border: 'solid .25rem transparent',
    borderTopLeftRadius: '50% 100%',
    borderTopRightRadius: '50% 100%',
    borderBottom: 'none',
    background: 'radial-gradient( 50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100% ),black',
    backgroundClip: 'padding-box',
    '&:before': {
      content: '',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      marginTop: '-.25rem',
      borderRadius: 'inherit',
      background: 'linear-gradient(to right, rgba(33, 13, 22, 1) 16%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 84%)',
    }
  }
])