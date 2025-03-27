import { css, keyframes } from '@emotion/react';
import { theme } from '@/components/ui/theme';

const loadingAnimation = keyframes({
  '0%': {
    transform: 'translateX(0)'
  },
  '100%': {
    transform: 'translateX(100%)'
  }
})

export const SkeletonImgCss = css({
  ':after': {
    background: `linear-gradient(90deg, ${theme.color.greyE6} 0%, #ffffff 40%, ${theme.color.greyE6} 80%)`,
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    animation: `${loadingAnimation} 1.5s infinite linear`
  },
  position: 'relative',
})
