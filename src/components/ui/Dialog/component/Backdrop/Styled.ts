import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const opacity = css`
opacity: var(--backdrop-opacity, 0.7);
`

export const DialogBackdropAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    ${opacity}
  }
`

export const DialogBackdrop = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000000;
`

export const DialogBackdropStanding = styled(DialogBackdrop)`
${opacity}
`
export const DialogBackdropStart = styled(DialogBackdrop)`
animation: ${DialogBackdropAnimation} var(--backdrop-animation-delay, .5s);
${opacity}
`

export const DialogBackdropEnd = styled(DialogBackdrop)`
animation: ${DialogBackdropAnimation} var(--backdrop-animation-delay, .5s) reverse;
opacity: 0;
`
