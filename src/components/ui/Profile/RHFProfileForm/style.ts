import { css } from '@emotion/react';

export const ProfileFormCss = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: '2rem'
})

export const ProfileTitleAreaCss = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: '0.5rem',
  textAlign: 'center'
})

export const ProfileEditFieldGridCss = css({
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ProfileChildrenGridCss = css({
  display: 'grid',
  gridTemplateAreas: '"child-title child-switch" "child-desc child-switch"',
  gridTemplateColumns: '1fr auto',
  lineHeight: 1.5
})
export const ProfileChildTitleCss = css({
  gridArea: 'child-title',
  fontSize: '1.125rem',
  fontWeight: 500
})
export const ProfileChildDescCss = css({
  gridArea: 'child-desc',
  fontSize: '.825rem',
  color: 'var(--secondery-text-color)'
})
export const ProfileChildSwitchCss = css({
  gridArea: 'child-switch',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const ProfileBtnAreaGridCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
})

export const ProfileBtnStyleCss = css({
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.125rem',
  fontWeight: 500
})
