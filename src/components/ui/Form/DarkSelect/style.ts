import { css } from '@emotion/react';
import { theme } from '../../theme';
import { InputAreaShellCss, InputDefaultStateCss, InputDivCss, InputOutlineCss } from '../TextInput/style';
import { SelectArrowPositionCss, SelectOutlineCss } from '../style/SelectStyle';

export const layoutCss = css([InputDivCss, {
  '--left-space': '0.75rem',
  '--right-space': '2.25rem'
}, InputDefaultStateCss])

export const prefixCss = css({
  color: theme.color.white.default,
  position: 'absolute',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  left: '0.75rem',
  zIndex: 1
})

export const postfixCss = css([SelectArrowPositionCss])

export const inputCss = css([{
  appearance: 'none',
  lineHeight: '1.25rem',
  paddingTop: '0.375rem',
  paddingBottom: '0.375rem',
  outlineColor: 'white'
}, {
  border: 0,
  background: 'transparent',
  outlineColor: '',
}])

export const shellCss = css([InputAreaShellCss])

export const outlineCss = css([InputOutlineCss, SelectOutlineCss])