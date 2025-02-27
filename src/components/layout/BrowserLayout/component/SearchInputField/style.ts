import type { CSSObject } from '@emotion/react';
import { css } from '@emotion/react';
import { theme } from '@/components/ui/theme';

const SearchLayoutOnEditCss: CSSObject = {
  columnGap: '16px',
  borderColor: theme.color.white.opacity75,
  '> input': {
    width: '220px'
  }
}

export const SearchLayoutCss = css({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '6px',
  border: 'solid 1px',
  borderColor: 'rgba(255,255,255,0)',
  transitionDuration: '.5s',
  transitionProperty: 'border-color',
  'svg': {
    display: 'block'
  },
  ':hover': SearchLayoutOnEditCss,
  ':has(input:focus)': SearchLayoutOnEditCss,
  ':has(input:not(:placeholder-shown))': SearchLayoutOnEditCss
})

export const SearchInputTextCss = css({
  width: '0px',
  height: '100%',
  border: 'none',
  outline: 'none',
  transitionDuration: '.5s',
  transitionProperty: 'width',
})
