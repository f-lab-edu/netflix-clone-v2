import { css } from '@emotion/react';
import { MediaPoint } from '@/components/styled/layout';
import { theme } from '@/components/ui/theme';

export const HeaderBorderCss = css({
  borderBottom: '1px solid',
  borderBottomColor: theme.color.grey.lightDivider
})

export const HeaderDefaultStyleCss = css({
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'center',
  '> *': [
    {
      display: 'flex',
      alignItems: 'center'
    },
    MediaPoint({
      margin: ['0 10px', '0 3%'],
      fontSize: ['14px', '16px', '19px'],
      minHeight: ['45px', '75px', '90px']
    })
  ]
})

export const HeaderLinkStyleCss = css([{
  fill: theme.color.red.default,
}, MediaPoint({
  width: ['75px', '167px']
})])

export const HeaderLoginLinkStyleCss = css({
  float: 'right',
  fontWeight: 500,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  }
})

export const BodyLayoutCss = css({
  paddingBottom: '95px',
  flexGrow: 1,
  overflow: 'hidden',
  width: '100%'
})

export const BodyContentShellCss = css({
  '--layout-container-side-padding': '32px',
  padding: '20px var(--layout-container-side-padding) 60px',
  margin: '0 auto 15px',
  maxWidth: '978px',
  overflow: 'hidden',
})

export const FooterLayoutCss = css({
  backgroundColor: theme.color.grey.footerLightBg,
  marginTop: 0,
  opacity: 1,
  color: theme.color.grey.footerLightFont,
  fontSize: '1rem',
  width: '100%',
  minWidth: '190px',
  position: 'relative',
  paddingBotom: '20px',
  borderTop: '1px solid',
  borderTopColor: theme.color.grey.lightDivider
})

export const FooterContentShellCss = css({
  width: '90%',
  paddingTop: '30px',
  margin: '0 auto'
})