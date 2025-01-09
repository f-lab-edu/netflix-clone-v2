import { css } from '@emotion/react'

export const InputDivCss = css([{
  display: 'flex',
  verticalAlign: 'text-top',
  position: 'relative',
  flexWrap: 'wrap',
  flexFlow: 'column',
  width: '100%',
  textAlign: 'start'
}])

export const RadioTagDefaultCss = css({
  width: '32px',
  height: '32px',
  border: 0
})
export const RadioTagContentLabelCss = css({
  display: 'flex',
  width: '0px',
  height: '0px',
  border: 0
})

export const RadioLabelStyle = css({
  position: 'static',
  pointerEvents: 'initial',
  flex: '0 0 100%',
  overflow: 'visible'
})

export const RadioOutLineWithContentLabelStyle = css({
  background: 'none',
  border: 'none'
})

export const InputAreaShellWithContentLabelCss = css({
  alignItems: 'stretch',
  'label > *': {
    height: '100%'
  }
})